import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { signJwt } from '@/lib/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = signJwt({ userId: user.id, email: user.email });

  const response = NextResponse.json({ message: 'Login success' });
  response.cookies.set('token', token, {
    httpOnly: true,
    path: '/',
  });

  return response;
}
