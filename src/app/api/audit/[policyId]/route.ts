import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function GET(_request: Request, context: { params: { policyId: string } }) {
  const { policyId } = context.params;
  const entries = db.getAudit(policyId);
  if (!entries.length) return NextResponse.json([], { status: 200 });
  return NextResponse.json(entries);
}









