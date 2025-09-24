import { LedgerStore, Account, Policy, RenewalWindow, ReminderEvent, Document, AuditLog, PolicyFilters, calculateRenewalWindow } from './types';

const store: LedgerStore = {
  accounts: [],
  policies: [],
  windows: [],
  reminders: [],
  documents: [],
  audit: [],
};

function generateId(prefix: string = 'id'): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}

export const db = {
  get data() {
    return store;
  },

  createAccount(input: Omit<Account, 'id'>): Account {
    const account: Account = { id: generateId('acct'), ...input };
    store.accounts.push(account);
    return account;
  },

  createPolicy(input: Omit<Policy, 'id' | 'renewal_status'> & { renewal_status?: Policy['renewal_status'] }): { policy: Policy; window: RenewalWindow } {
    const policy: Policy = {
      id: generateId('pol'),
      renewal_status: input.renewal_status ?? 'upcoming',
      ...input,
    };
    store.policies.push(policy);
    const window = this.upsertRenewalWindow(policy.id, policy.expiration_date);
    this.log(policy.id, 'system', 'policy.created', { policy });
    return { policy, window };
  },

  upsertRenewalWindow(policyId: string, expirationIso: string): RenewalWindow {
    const offsets = calculateRenewalWindow(expirationIso);
    const existingIndex = store.windows.findIndex(w => w.policy_id === policyId);
    const window: RenewalWindow = { policy_id: policyId, ...offsets, custom_offsets: [] };
    if (existingIndex >= 0) store.windows[existingIndex] = window; else store.windows.push(window);
    return window;
  },

  listPolicies(filters: PolicyFilters = {}) {
    return store.policies.filter(p => {
      if (filters.status && p.renewal_status !== filters.status) return false;
      if (filters.owner && p.renewal_owner !== filters.owner) return false;
      if (filters.expiration_before && new Date(p.expiration_date) > new Date(filters.expiration_before)) return false;
      if (filters.expiration_after && new Date(p.expiration_date) < new Date(filters.expiration_after)) return false;
      return true;
    }).map(p => ({
      policy: p,
      account: store.accounts.find(a => a.id === p.account_id) || null,
      window: store.windows.find(w => w.policy_id === p.id) || null,
      nextActionAt: (() => {
        const w = store.windows.find(w => w.policy_id === p.id);
        if (!w) return null;
        const now = new Date();
        const dates = [w.d90_at, w.d60_at, w.d30_at].map(d => new Date(d)).filter(d => d >= now).sort((a, b) => a.getTime() - b.getTime());
        return dates[0]?.toISOString() ?? null;
      })(),
    }));
  },

  scheduleReminders(policyId: string): ReminderEvent[] {
    const window = store.windows.find(w => w.policy_id === policyId);
    if (!window) return [];
    const templateId = 'renewal_default_v1';
    const channels: Array<ReminderEvent['channel']> = ['email'];
    const recipients: Array<ReminderEvent['to']> = ['client', 'staff'];
    const scheduleDates = [window.d90_at, window.d60_at, window.d30_at];
    const events: ReminderEvent[] = [];
    for (const when of scheduleDates) {
      for (const to of recipients) {
        for (const channel of channels) {
          const ev: ReminderEvent = {
            id: generateId('rem'),
            policy_id: policyId,
            to,
            channel,
            template_id: templateId,
            scheduled_at: when,
            status: 'scheduled',
          };
          store.reminders.push(ev);
          events.push(ev);
        }
      }
    }
    this.log(policyId, 'system', 'reminders.scheduled', { count: events.length });
    return events;
  },

  markRenewed(policyId: string, terms?: string): Policy | null {
    const idx = store.policies.findIndex(p => p.id === policyId);
    if (idx < 0) return null;
    store.policies[idx].renewal_status = 'renewed';
    if (terms) store.policies[idx].terms = terms;
    this.log(policyId, 'user', 'policy.mark_renewed', { terms });
    return store.policies[idx];
  },

  log(policyId: string, actor: AuditLog['actor'], action: string, payload?: Record<string, unknown>): AuditLog {
    const entry: AuditLog = { id: generateId('log'), policy_id: policyId, actor, action, timestamp: new Date().toISOString(), payload };
    store.audit.push(entry);
    return entry;
  },

  getAudit(policyId: string): AuditLog[] {
    return store.audit.filter(a => a.policy_id === policyId).sort((a, b) => a.timestamp.localeCompare(b.timestamp));
  },
};

export type { Account, Policy };









