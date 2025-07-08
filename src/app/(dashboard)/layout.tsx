// src/app/(dashboard)/layout.tsx
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { verifyJwt } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const decoded = token && verifyJwt(token);

  if (!decoded || typeof decoded !== "object" || !("userId" in decoded)) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
