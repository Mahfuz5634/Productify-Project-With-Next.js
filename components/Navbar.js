"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { logoutUser } from "@/lib/auth";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const profileImg =
    user?.photoURL ||
    "https://i.ibb.co/3T1H1dD/default-profile.png";

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="font-bold text-2xl tracking-wide">
            🍿 Productify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">

            <Link href="/" className="hover:text-gray-200 transition">Home</Link>
            <Link href="/events" className="hover:text-gray-200 transition">Events</Link>
            <Link href="/about" className="hover:text-gray-200 transition">About</Link>
            <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>

            {/* If NOT logged in */}
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-3 py-1 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-3 py-1 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* Logged In — Show Menu Items Inline */}
                <Link href="/add-product" className="hover:text-gray-200 transition">
                  Add Product
                </Link>
                <Link href="/manage-events" className="hover:text-gray-200 transition">
                  Manage Events
                </Link>

                {/* User Name */}
                <div className="flex items-center gap-2">
                  <img
                    src={profileImg}
                    alt="user"
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="font-semibold">{user.displayName || "User"}</span>
                </div>

                {/* Logout Button */}
                <button
                  onClick={logoutUser}
                  className="px-3 py-1 bg-white text-blue-600 rounded-md hover:bg-gray-200 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">

          <Link href="/" className="block py-2 border-b border-blue-400">Home</Link>
          <Link href="/events" className="block py-2 border-b border-blue-400">Events</Link>
          <Link href="/about" className="block py-2 border-b border-blue-400">About</Link>
          <Link href="/contact" className="block py-2 border-b border-blue-400">Contact</Link>

          {!user ? (
            <>
              <Link href="/login" className="block py-2">Login</Link>
              <Link href="/register" className="block py-2">Register</Link>
            </>
          ) : (
            <>
              <div className="py-2 border-t border-blue-400 flex items-center gap-3">
                <img
                  src={profileImg}
                  className="w-9 h-9 rounded-full"
                  alt="user"
                />
                <span>{user.email}</span>
              </div>

              <Link href="/add-product" className="block py-2">Add Product</Link>
              <Link href="/manage-events" className="block py-2">Manage Events</Link>

              <button
                onClick={logoutUser}
                className="block py-2 text-left w-full"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
