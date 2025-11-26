"use client";

import React from "react";

const steps = [
  {
    title: "Create an Event",
    description: "Set up your event details, schedule, and pricing easily.",
    icon: "📝",
  },
  {
    title: "Promote & Share",
    description: "Share your event with your audience and track reach.",
    icon: "📣",
  },
  {
    title: "Manage Attendees",
    description: "Monitor registrations and manage guest lists in real-time.",
    icon: "👥",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How Productify Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg shadow-lg bg-gray-100 hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl mb-4 text-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
