"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 sm:px-8">
      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-600">
          Welcome to SmartLearn
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700">
          Discover AI-driven personalized learning content designed just for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-4 rounded-lg transition"
          >
            Get Started
          </Link>
          <Link
            href="/register"
            className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 text-lg font-medium px-8 py-4 rounded-lg transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
