"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { logoutUser } from "@/lib/auth";

// Icons
import {
  Home,
  Info,
  Phone,
  Calendar,
  LogIn,
  UserPlus,
  LogOut,
  Plus,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const profileImg =
    user?.photoURL || "https://i.ibb.co/3T1H1dD/default-profile.png";

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-2xl tracking-wide flex items-center gap-2"
          >
            🍿 <span>Productify</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">

            <NavItem href="/" label="Home" icon={<Home size={18} />} />
            <NavItem href="/events" label="Events" icon={<Calendar size={18} />} />
            <NavItem href="/about" label="About" icon={<Info size={18} />} />
            <NavItem href="/contact" label="Contact" icon={<Phone size={18} />} />

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <LogIn size={18} /> Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <UserPlus size={18} /> Register
                </Link>
              </>
            ) : (
              <>
                <NavItem
                  href="/add-product"
                  label="Add Product"
                  icon={<Plus size={18} />}
                />

                <NavItem
                  href="/manage-events"
                  label="Manage"
                  icon={<Settings size={18} />}
                />

                {/* Profile */}
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                  <img
                    src={profileImg}
                    alt="user"
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="font-semibold">{user.displayName || "User"}</span>
                </div>

                {/* Logout */}
                <button
                  onClick={logoutUser}
                  className="px-4 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <LogOut size={18} /> Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">

          <MobileItem href="/" label="Home" icon={<Home size={18} />} />
          <MobileItem href="/events" label="Events" icon={<Calendar size={18} />} />
          <MobileItem href="/about" label="About" icon={<Info size={18} />} />
          <MobileItem href="/contact" label="Contact" icon={<Phone size={18} />} />

          {!user ? (
            <>
              <MobileItem href="/login" label="Login" icon={<LogIn size={18} />} />
              <MobileItem href="/register" label="Register" icon={<UserPlus size={18} />} />
            </>
          ) : (
            <>
              <div className="py-2 border-t border-blue-400 flex items-center gap-3">
                <img src={profileImg} className="w-9 h-9 rounded-full" alt="user" />
                <span>{user.email}</span>
              </div>

              <MobileItem
                href="/add-product"
                label="Add Product"
                icon={<Plus size={18} />}
              />

              <MobileItem
                href="/manage-events"
                label="Manage Events"
                icon={<Settings size={18} />}
              />

              <button
                onClick={logoutUser}
                className="block py-2 text-left w-full flex items-center gap-2"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* --- Reusable Components --- */

const NavItem = ({ href, label, icon }) => (
  <Link
    href={href}
    className="hover:text-gray-200 transition flex items-center gap-2"
  >
    {icon} {label}
  </Link>
);

const MobileItem = ({ href, label, icon }) => (
  <Link href={href} className="block py-2 border-b border-blue-400 flex items-center gap-2">
    {icon} {label}
  </Link>
);
