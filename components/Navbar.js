"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({ user }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="font-bold text-xl">🍿Productify</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center font-bold">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            {/* Auth Buttons / Dropdown */}
            {!user ? (
              <>
                <Link href="/login" className="px-3 py-1 bg-white text-blue-600 rounded">
                  Login
                </Link>
                <Link href="/register" className="px-3 py-1 bg-white text-blue-600 rounded">
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="px-3 py-1 bg-white text-blue-600 rounded"
                >
                  {user.name}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <p className="px-4 py-2 border-b">{user.email}</p>
                    <Link href="/add-product" className="block px-4 py-2 hover:bg-gray-100">
                      Add Product
                    </Link>
                    <Link href="/manage-products" className="block px-4 py-2 hover:bg-gray-100">
                      Manage Products
                    </Link>
                    <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/events" className="block py-2">Events</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/contact" className="block py-2">Contact</Link>

          {!user ? (
            <>
              <Link href="/login" className="block py-2">Login</Link>
              <Link href="/register" className="block py-2">Register</Link>
            </>
          ) : (
            <>
              <p className="py-2 border-t">{user.email}</p>
              <Link href="/add-product" className="block py-2">Add Product</Link>
              <Link href="/manage-products" className="block py-2">Manage Products</Link>
              <button className="block py-2 w-full text-left">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
