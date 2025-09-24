import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function POST(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const body = await request.json().catch(() => ({}));
  const updated = db.markRenewed(id, body?.terms);
  if (!updated) return NextResponse.json({ error: 'policy_not_found' }, { status: 404 });
  return NextResponse.json(updated);
}









