// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.redirect('http://localhost:3000/login');
  response.cookies.set('token', '', { maxAge: 0, path: '/' });
  return response;
}
