"use client";

import React from "react";

const featuresData = [
  {
    title: "Easy Event Management",
    description: "Plan, organize, and track your events effortlessly in one place.",
    icon: "🎉",
  },
  {
    title: "Online Ticketing",
    description: "Sell and manage tickets online with secure payment options.",
    icon: "🎟️",
  },
  {
    title: "Customizable Dashboard",
    description: "Manage your events and attendees with a user-friendly dashboard.",
    icon: "📊",
  },
  {
    title: "Real-time Notifications",
    description: "Stay updated with live notifications and event reminders.",
    icon: "🔔",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Productify
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              tabIndex={0} // makes it focusable
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
