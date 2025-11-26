"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-black to-gray-900">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-700/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-700/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className=" text-gray-600 text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Make Your Events  
          <span className="text-blue-400"> Unforgettable 🎊</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl mb-8">
          Plan, organize, and manage your events effortlessly with{" "}
          <span className="text-blue-400 font-semibold">Productify</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link
            href="/events"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-700/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-400/40"
          >
            Explore Events
          </Link>

          <Link
            href="/add-product"
            className="px-8 py-3 rounded-lg border border-white/40 backdrop-blur-md bg-white/10 
            hover:bg-white text-black font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            Host an Event
          </Link>
        </div>

        {/* Floating Tagline */}
        <p className="text-gray-400 mt-6 italic animate-pulse">
          Empowering creators & organizers worldwide ✨
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
