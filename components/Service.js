"use client";

import React from "react";

const services = [
  {
    title: "Event Hosting",
    description: "Host small or large-scale events with complete control.",
    icon: "🏟️",
  },
  {
    title: "Analytics & Reports",
    description: "Track performance with detailed event analytics.",
    icon: "📈",
  },
  {
    title: "Team Collaboration",
    description: "Invite team members and manage events together.",
    icon: "🤝",
  },
  {
    title: "Customer Support",
    description: "Our support team ensures smooth event operations.",
    icon: "💬",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
