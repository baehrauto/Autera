import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact_emails = [], contact_phones = [], address, notes } = body || {};
    if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 });
    const account = db.createAccount({ name, contact_emails, contact_phones, address, notes });
    return NextResponse.json(account, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'invalid_request' }, { status: 400 });
  }
}









