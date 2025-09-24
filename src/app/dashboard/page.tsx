"use client";

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';

type Row = {
  id: string;
  account: string;
  line: string;
  carrier: string;
  expiration: string;
  status: string;
  owner?: string;
  nextAction?: string | null;
};

export default function LedgerDashboard() {
  const [rows, setRows] = useState<Row[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('');
  const [owner, setOwner] = useState<string>('');

  useEffect(() => {
    const url = new URL('/api/policies', window.location.origin);
    if (status) url.searchParams.set('status', status);
    if (owner) url.searchParams.set('owner', owner);
    fetch(url.toString())
      .then(r => r.json())
      .then((list) => {
        const mapped: Row[] = list.map((item: any) => ({
          id: item.policy.id,
          account: item.account?.name ?? '—',
          line: item.policy.line_of_business,
          carrier: item.policy.carrier,
          expiration: item.policy.expiration_date?.slice(0, 10),
          status: item.policy.renewal_status,
          owner: item.policy.renewal_owner,
          nextAction: item.nextActionAt ? item.nextActionAt.slice(0, 10) : null,
        }));
        setRows(mapped);
      });
  }, [status, owner]);

  const filtered = useMemo(() => {
    if (!query) return rows;
    const q = query.toLowerCase();
    return rows.filter(r =>
      r.account.toLowerCase().includes(q) ||
      r.line.toLowerCase().includes(q) ||
      r.carrier.toLowerCase().includes(q)
    );
  }, [rows, query]);

  const markRenewed = async (id: string) => {
    await fetch(`/api/policies/${id}/mark-renewed`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
    // refresh
    const url = new URL('/api/policies', window.location.origin);
    if (status) url.searchParams.set('status', status);
    if (owner) url.searchParams.set('owner', owner);
    const list = await fetch(url.toString()).then(r => r.json());
    const mapped: Row[] = list.map((item: any) => ({
      id: item.policy.id,
      account: item.account?.name ?? '—',
      line: item.policy.line_of_business,
      carrier: item.policy.carrier,
      expiration: item.policy.expiration_date?.slice(0, 10),
      status: item.policy.renewal_status,
      owner: item.policy.renewal_owner,
      nextAction: item.nextActionAt ? item.nextActionAt.slice(0, 10) : null,
    }));
    setRows(mapped);
  };

  const schedule = async (id: string) => {
    await fetch(`/api/policies/${id}/reminders/schedule`, { method: 'POST' });
  };

  return (
    <main className="min-h-screen bg-[#faf3ed]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Renewal Dashboard</h1>
          <p className="text-lg text-gray-700 mt-2">Track policies, deadlines, and next actions.</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search account, line, carrier" className="border rounded-xl px-4 py-2" />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="border rounded-xl px-4 py-2">
            <option value="">All status</option>
            <option value="upcoming">Upcoming</option>
            <option value="in_progress">In Progress</option>
            <option value="at_risk">At Risk</option>
            <option value="renewed">Renewed</option>
            <option value="lapsed">Lapsed</option>
          </select>
          <input value={owner} onChange={(e) => setOwner(e.target.value)} placeholder="Owner (email/id)" className="border rounded-xl px-4 py-2" />
          <div className="flex items-center text-sm text-gray-600">{filtered.length} policies</div>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-3">Account</th>
                <th className="px-6 py-3">Policy</th>
                <th className="px-6 py-3">Carrier</th>
                <th className="px-6 py-3">Expiration</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Next Action</th>
                <th className="px-6 py-3">Owner</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map(r => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 font-semibold">{r.account}</td>
                  <td className="px-6 py-3">{r.line}</td>
                  <td className="px-6 py-3">{r.carrier}</td>
                  <td className="px-6 py-3">{r.expiration}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded-xl text-xs font-bold ${
                      r.status === 'at_risk' ? 'bg-red-100 text-red-700' :
                      r.status === 'renewed' ? 'bg-green-100 text-green-700' :
                      r.status === 'in_progress' ? 'bg-amber-100 text-amber-700' :
                      r.status === 'lapsed' ? 'bg-gray-200 text-gray-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{r.status}</span>
                  </td>
                  <td className="px-6 py-3">{r.nextAction ?? '—'}</td>
                  <td className="px-6 py-3">{r.owner ?? '—'}</td>
                  <td className="px-6 py-3 space-x-2">
                    <button onClick={() => schedule(r.id)} className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">Schedule</button>
                    <button onClick={() => markRenewed(r.id)} className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm">Mark Renewed</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}