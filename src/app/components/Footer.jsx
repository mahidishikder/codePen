"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-2xl mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700">
        
        {/* Logo + Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Litepen</h2>
          <p className="text-gray-600 leading-relaxed">
            A modern publishing platform where readers discover vibrant content and writers grow their audience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-black transition">About Us</Link></li>
            <li><Link href="/write" className="hover:text-black transition">Write a Post</Link></li>
            <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-black transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:text-black transition">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link></li>
            <li><Link href="/help" className="hover:text-black transition">Help Center</Link></li>
            <li><Link href="/community" className="hover:text-black transition">Community Rules</Link></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Connected</h3>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition font-medium">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4">
            <Link href="#"><Facebook className="w-5 h-5 hover:text-black transition" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 hover:text-black transition" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 hover:text-black transition" /></Link>
            <Link href="#"><Linkedin className="w-5 h-5 hover:text-black transition" /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 shadow-2xl bg-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Litepen. All rights reserved.
      </div>
    </footer>
  );
}
