'use client';

import { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A passionate learner exploring the world of AI and development.",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8">👤 Your Profile</h1>

      <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-xl p-8 backdrop-blur-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="relative">
            <Image
              src="/avatar-placeholder.png"
              alt="Profile Avatar"
              width={140}
              height={140}
              className="rounded-full border-4 border-blue-600 shadow-md"
            />
            <p className="text-xs text-gray-500 text-center mt-2">Change Avatar</p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 w-full space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Bio</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Save Changes
            </button>

            {saved && (
              <div className="flex items-center gap-2 text-green-600 mt-4 font-medium">
                <CheckCircle size={20} />
                Profile updated successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
