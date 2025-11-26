import clientPromise from "@/lib/mongodb";
import Link from "next/link";


export default async function EventDetails({ params }) {
  const { id } = await params;

  const client = await clientPromise;
  const db = client.db("productify");

  const event = await db.collection("event").findOne({
    _id: id,
  });

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link
        href="/events"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back
      </Link>

      <div className="w-full h-64 bg-gray-200 mb-6 flex items-center justify-center">
        <span className="text-6xl">
          {event.icon === "briefcase" && "💼"}
          {event.icon === "music-note" && "🎵"}
          {event.icon === "paint-brush" && "🎨"}
          {event.icon === "cpu" && "🖥️"}
          {event.icon === "heart" && "❤️"}
          {event.icon === "camera" && "📷"}
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

      <p className="text-gray-700 mb-6">{event.description}</p>

      <div className="grid grid-cols-2 gap-4 text-gray-600">
        <p>
          <strong>Price:</strong>{" "}
          {event.price === 0 ? "Free" : `${event.price} ${event.currency}`}
        </p>
        <p>
          <strong>Date:</strong> {event.date} at {event.time}
        </p>
        <p>
          <strong>Venue:</strong> {event.venue}
        </p>
        <p>
          <strong>Priority:</strong> {event.priority}
        </p>
        <p>
          <strong>Organizer:</strong> {event.organizer}
        </p>
        <p>
          <strong>Category:</strong> {event.category}
        </p>
      </div>
    </div>
  );
}
