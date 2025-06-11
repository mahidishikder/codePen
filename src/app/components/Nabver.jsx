"use client";

import Link from "next/link";
import { useState } from "react";
import { Bell, UserCircle, PencilLine, Search } from "lucide-react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Reusable SearchBar Component
  const SearchBar = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
      />
      <span className="absolute left-3 top-2.5 text-gray-400">
        <Search className="w-4 h-4" />
      </span>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Small Device Layout */}
        <div className="flex flex-col gap-4 py-4 md:hidden">
          {/* Top: Logo and Buttons */}
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-black"
            >
              🅒odepen
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 text-sm text-gray-700">
              {!isLoggedIn ? (
                <>
                  <Link href="/our-story" className="hover:text-black">
                    Our story
                  </Link>
                  <Link href="/write" className="hover:text-black">
                    Write
                  </Link>
                  <Link
                    href="/signin"
                    className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition text-sm"
                  >
                    Sign in
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/write"
                    className="flex items-center space-x-1 hover:text-black text-sm"
                  >
                    <PencilLine className="w-4 h-4" />
                    <span className="hidden sm:inline">Write</span>
                  </Link>
                  <button className="hover:text-black">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="hover:text-black">
                    <UserCircle className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Search Bar for Small Devices */}
          <SearchBar />
        </div>

        {/* ✅ Large Device Layout */}
        <div className="hidden md:flex items-center justify-between py-4">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-6 min-w-0">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-black whitespace-nowrap"
            >
              🅒odepen
            </Link>

            {/* Search */}
            <SearchBar className="w-72 max-w-full" />
          </div>

          {/* Right: Auth based buttons */}
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            {!isLoggedIn ? (
              <>
                <Link href="/our-story" className="hover:text-black">
                  Our story
                </Link>
                <Link href="/write" className="hover:text-black">
                  Write
                </Link>
                <Link
                  href="/signin"
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  Sign in
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/write"
                  className="flex items-center space-x-1 hover:text-black"
                >
                  <PencilLine className="w-4 h-4" />
                  <span>Write</span>
                </Link>
                <button className="hover:text-black">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="hover:text-black">
                  <UserCircle className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
