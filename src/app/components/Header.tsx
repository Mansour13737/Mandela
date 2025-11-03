// frontend/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-lg font-bold">
              M
            </div>
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Mandela
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-200 hover:text-white">
              خانه
            </Link>
            <Link href="/artists" className="text-gray-200 hover:text-white">
              هنرمندان
            </Link>
            <Link href="/projects" className="text-gray-200 hover:text-white">
              سفارش پروژه
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-white">
              درباره ما
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-3 py-1.5 rounded-md text-sm bg-transparent border border-gray-700 hover:border-gray-500"
            >
              ورود
            </Link>
            <Link
              href="/signup"
              className="px-4 py-1.5 rounded-md text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              ثبت‌نام
            </Link>
            <Link
              href="/create-project"
              className="ml-2 px-4 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-95"
              aria-label="ثبت پروژه جدید"
            >
              ثبت پروژه
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-expanded={open}
              aria-label="باز/بستن منو"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link href="/" className="block text-gray-200 py-1">
              خانه
            </Link>
            <Link href="/artists" className="block text-gray-200 py-1">
              هنرمندان
            </Link>
            <Link href="/projects" className="block text-gray-200 py-1">
              سفارش پروژه
            </Link>
            <Link href="/about" className="block text-gray-200 py-1">
              درباره ما
            </Link>

            <div className="pt-3 border-t border-gray-800">
              <Link
                href="/login"
                className="block text-center py-2 rounded-md text-sm border border-gray-700"
              >
                ورود
              </Link>
              <Link
                href="/signup"
                className="mt-2 block text-center py-2 rounded-md text-sm bg-indigo-500 text-white"
              >
                ثبت‌نام
              </Link>
              <Link
                href="/create-project"
                className="mt-2 block text-center py-2 rounded-md text-sm bg-gradient-to-r from-pink-500 to-indigo-500 text-white"
              >
                ثبت پروژه
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}