import Link from "next/link";
import clientPromise from "@/lib/mongodb";

export default async function EventsPage() {
  const client = await clientPromise;
  const db = client.db("productify");
  const events = await db.collection("event").find({}).toArray();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
      <p className="mb-6 text-gray-600">
        Find events by category or search below.
      </p>

      {/* Search bar (UI only) */}
      <input
        type="text"
        placeholder="Search events..."
        className="border rounded-md px-4 py-2 mb-6 w-full"
      />

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((evt) => (
          <div
            key={evt._id}
            className="shadow-lg hover:shadow-blue-400 rounded-lg p-4  transition"
          >
            {/* Icon / Image */}
            <div className="text-4xl mb-2">
              {evt.icon === "briefcase" && "💼"}
              {evt.icon === "music-note" && "🎵"}
              {evt.icon === "paint-brush" && "🎨"}
              {evt.icon === "cpu" && "🖥️"}
              {evt.icon === "heart" && "❤️"}
              {evt.icon === "camera" && "📷"}
            </div>

            {/* Title */}
            <h2 className="font-semibold text-lg mb-1">{evt.title}</h2>

            {/* Short description */}
            <p className="text-gray-600 mb-2">
              {evt.shortDescription?.length > 60
                ? evt.shortDescription.slice(0, 60) + "..."
                : evt.shortDescription}
            </p>

            {/* Price / Meta */}
            <p className="font-bold mb-2">
              {evt.price === 0 ? "Free" : `${evt.price} ${evt.currency}`}
            </p>

            {/* Details button */}
            <Link
              href={`/events/${evt._id}`}
              className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
