import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { account_id, line_of_business, carrier, effective_date, expiration_date, renewal_status, renewal_owner, terms, premium_estimate } = body || {};
    if (!account_id || !line_of_business || !carrier || !effective_date || !expiration_date) {
      return NextResponse.json({ error: 'missing_required_fields' }, { status: 400 });
    }
    const { policy, window } = db.createPolicy({ account_id, line_of_business, carrier, effective_date, expiration_date, renewal_status, renewal_owner, terms, premium_estimate });
    return NextResponse.json({ policy, window }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'invalid_request' }, { status: 400 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get('owner') || undefined;
  const status = (searchParams.get('status') || undefined) as any;
  const expiration_before = searchParams.get('expiration_before') || undefined;
  const expiration_after = searchParams.get('expiration_after') || undefined;
  const result = db.listPolicies({ owner, status, expiration_before, expiration_after });
  return NextResponse.json(result);
}









