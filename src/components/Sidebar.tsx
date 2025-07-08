"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Courses", href: "/dashboard/courses" },
  { name: "Profile", href: "/dashboard/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white shadow-md flex flex-col justify-between p-6">
      {/* Top: Brand & Navigation */}
      <div>
        <h2 className="text-2xl font-extrabold text-blue-600 mb-8 tracking-tight">
          SmartLearn
        </h2>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition font-medium",
                pathname === item.href && "bg-blue-100 text-blue-700 font-semibold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom: Actions */}
      <div className="border-t pt-6">
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-100 transition font-semibold"
          >
            Logout
          </button>
        </form>
        <p className="text-xs text-gray-400 text-center mt-4">© 2025 SmartLearn</p>
      </div>
    </aside>
  );
}
