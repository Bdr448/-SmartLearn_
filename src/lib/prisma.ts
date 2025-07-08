// src/app/api/auth/me/route.ts

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/auth";
import { prisma } from "@/lib/db";


export async function GET() {
  const cookieStore = await cookies(); // ✅ await used here
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decoded = verifyJwt(token);

  if (!decoded || typeof decoded !== "object" || !("userId" in decoded)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
    select: { email: true },
  });

  return NextResponse.json(user);
}
export { prisma };

