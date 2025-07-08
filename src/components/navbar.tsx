// src/components/navbar.tsx

"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SmartLearn</h1>
      <div className="space-x-6">
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>
        <Link href="/courses" className="text-gray-700 hover:text-blue-600">
          Courses
        </Link>
        <Link href="/profile" className="text-gray-700 hover:text-blue-600">
          Profile
        </Link>
        <form action="/api/auth/logout" method="POST" className="inline">
          <button
            type="submit"
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
}
