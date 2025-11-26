import clientPromise from "@/lib/mongodb";
import EventsClient from "./EventsClient";

export default async function EventsPage() {
  const client = await clientPromise;
  const db = client.db("productify");
  const events = await db.collection("event").find({}).toArray();

  const cleanEvents = events.map((evt) => ({
    ...evt,
    _id: evt._id.toString(),
  }));

  return <EventsClient events={cleanEvents} />;
}
