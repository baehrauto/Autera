import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function POST(_request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const events = db.scheduleReminders(id);
  if (!events.length) return NextResponse.json({ error: 'policy_or_window_not_found' }, { status: 404 });
  return NextResponse.json({ scheduled: events.length, events });
}









