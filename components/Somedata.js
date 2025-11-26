// app/page.js
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

export default async function Home() {
  const client = await clientPromise;
  const db = client.db("productify");

  const events = await db.collection("event")
    .find({})
    .limit(3)
    .toArray();

  return (
    <div className="min-h-screen">

    

      {/* FEATURED EVENTS */}
      <section className="pt-16 bg-gray-50">
        <div className="container mx-auto px-6">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Events</h2>

            <Link
              href="/events"
              className="text-blue-600 hover:underline font-medium"
            >
              More Events →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >
                {/* EMOJI ICON */}
                <div className="text-6xl mb-4">
                  {getIcon(event.icon)}
                </div>

                <h3 className="text-xl font-semibold">{event.title}</h3>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {event.shortDescription}
                </p>

                <p className="mt-3 text-blue-600 font-semibold">
                  📍 {event.location}
                </p>

                <Link
                  href={`/events/${event._id}`}
                  className="inline-block mt-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
