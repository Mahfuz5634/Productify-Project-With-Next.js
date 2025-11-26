"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function EventsClient({ events }) {
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = events.filter((evt) =>
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>

      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-4 py-2 mb-6 w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.map((evt) => (
          <div
            key={evt._id}
            className="shadow-lg hover:shadow-blue-400 rounded-lg p-4 transition"
          >
            <div className="text-4xl mb-2">{getIcon(evt.icon)}</div>

            <h2 className="font-semibold text-lg mb-1">{evt.title}</h2>

            <p className="text-gray-600 mb-2">
              {evt.shortDescription?.length > 60
                ? evt.shortDescription.slice(0, 60) + "..."
                : evt.shortDescription}
            </p>

            <p className="font-bold mb-2">
              {evt.price === 0 ? "Free" : `${evt.price} ${evt.currency}`}
            </p>

            <Link
              href={`/events/${evt._id}`}
              className="text-white bg-blue-500 px-3 py-1 rounded"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
