import clientPromise from "@/lib/mongodb";
import Link from "next/link";

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

export default async function EventDetails({ params }) {
  const { id } = await params;

  const client = await clientPromise;
  const db = client.db("productify");

  const event = await db.collection("event").findOne({ _id: id });

  if (!event) return <p>Event not found</p>;

  return (
    <div className="min-h-screen px-6 py-12 ">
      
      {/* Back Button */}
      <Link
        href="/events"
        className="inline-block mb-6 text-blue-600 font-medium hover:underline"
      >
        ← Back to Events
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        
        {/* Icon Header */}
        <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
          <span className="text-8xl">{getIcon(event.icon)}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-8">
          {event.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-lg font-semibold">
              {event.price === 0 ? "Free" : `${event.price} ${event.currency}`}
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Date & Time</p>
            <p className="text-lg font-semibold">{event.date} at {event.time}</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Venue</p>
            <p className="text-lg font-semibold">{event.venue}</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Priority</p>
            <p className="text-lg font-semibold">{event.priority}</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Organizer</p>
            <p className="text-lg font-semibold">{event.organizer}</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Category</p>
            <p className="text-lg font-semibold">{event.category}</p>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition">
            Register Now
          </button>
          <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition">
            Add to Calendar
          </button>
        </div>

      </div>
    </div>
  );
}
