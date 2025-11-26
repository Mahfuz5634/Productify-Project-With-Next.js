"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function EventsClient({ events }) {
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = events.filter(
      (evt) =>
        evt.title.toLowerCase().includes(lower) ||
        evt.shortDescription?.toLowerCase().includes(lower)
    );
    setFilteredEvents(filtered);
  }, [search, events]);

  const getIcon = (icon) => {
    const icons = {
      briefcase: "💼",
      "music-note": "🎵",
      "paint-brush": "🎨",
      cpu: "🖥️",
      heart: "❤️",
      camera: "📷",
    };
    return icons[icon] || "⭐";
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-2 text-blue-600">
        Upcoming Events
      </h1>
      <p className="text-gray-600 mb-8">Find events that match your interests.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-3 w-full mb-10 shadow-sm 
        focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredEvents.map((evt) => (
          <div
            key={evt._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-blue-300 
            transition-all hover:-translate-y-1 p-5 flex flex-col justify-between"
          >
            {/* Top Content */}
            <div>
              {/* Icon */}
              <div className="text-4xl mb-4 w-14 h-14 flex items-center justify-center 
                rounded-full bg-blue-100 text-blue-600">
                {getIcon(evt.icon)}
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 mb-2">
                {evt.title}
              </h2>

              {/* Category Badge */}
              <span className="inline-block bg-blue-50 text-blue-600 text-sm font-medium 
              px-3 py-1 rounded-full mb-3 border border-blue-200">
                {evt.category || "General"}
              </span>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {evt.shortDescription?.length > 80
                  ? evt.shortDescription.slice(0, 80) + "..."
                  : evt.shortDescription}
              </p>

              {/* Price */}
              <p className="font-bold text-blue-600 text-lg mb-3">
                {evt.price === 0 ? "Free" : `${evt.price} ${evt.currency}`}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t pt-4 mt-2"></div>

            {/* Fixed Button (Bottom) */}
            <Link
              href={`/events/${evt._id}`}
              className="text-center text-white py-2 w-full rounded-lg font-semibold 
              bg-gradient-to-r from-blue-600 to-purple-600 shadow-md 
              hover:from-blue-700 hover:to-purple-700 transition active:scale-95"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
