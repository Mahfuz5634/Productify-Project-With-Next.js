"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🍿 Productify</h2>
          <p className="text-gray-300">
            Your one-stop solution for managing events, tickets, and everything in between. Make every event memorable!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline hover:text-blue-300 transition-colors">Events</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-blue-300 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-blue-300 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-white text-blue-700 hover:bg-blue-700 hover:text-white transition-colors shadow-md">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-colors shadow-md">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-white text-pink-500 hover:bg-pink-500 hover:text-white transition-colors shadow-md">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10">
        <p className="text-center text-sm py-4 text-gray-300">
          &copy; {new Date().getFullYear()} Productify. All rights reserved. Crafted with ❤️ by Mahfuz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
