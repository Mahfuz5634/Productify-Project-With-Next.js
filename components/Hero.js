"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white h-screen flex items-center">
      {/* Optional Background image */}
      {/* <div className="absolute inset-0">
        <img
          src="/images/event-bg.jpg"
          alt="Event Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Make Your Events Unforgettable🎊
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          Plan, organize, and manage your events effortlessly with Productify.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link
            href="/events"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold transition"
          >
            Explore Events
          </Link>
          <Link
            href="/add-product"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded text-white font-semibold transition"
          >
            Host an Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
