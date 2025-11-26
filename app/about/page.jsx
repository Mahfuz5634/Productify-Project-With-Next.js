"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen  py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          About Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Welcome to <span className="font-semibold">Eventify</span> — your
          simple and smart event management platform.  
          We help organizers create, publish, and manage events with ease.
        </p>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-7">
            Our mission is to make event creation effortless. Whether it is a
            workshop, meetup, concert, or a small community gathering — we
            provide organizers the right tools to publish events and connect
            with their audience.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Super simple & clean UI</li>
            <li>✔ Easy event publishing</li>
            <li>✔ Secure authentication & protected dashboard</li>
            <li>✔ Fast performance powered by Next.js</li>
            <li>✔ Manage all events from one place</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-600 leading-7 mb-3">
            Have questions or feedback? We love to hear from you.
          </p>
          <p className="text-gray-800 font-medium">📧 support@eventify.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
