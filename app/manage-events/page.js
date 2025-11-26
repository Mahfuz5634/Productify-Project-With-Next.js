"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function ManageEvents() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [events, setEvents] = useState([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Load events
  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  if (loading || !user)
    return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left">Title</th>
              <th className="p-3 border text-left">Date</th>
              <th className="p-3 border text-left">Venue</th>
              <th className="p-3 border text-center">Price</th>
              <th className="p-3 border text-center">Priority</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.length === 0 && (
              <tr>
                <td colSpan="6" className="p-5 text-center text-gray-500">
                  No events found
                </td>
              </tr>
            )}

            {events.map((ev) => (
              <tr key={ev._id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{ev.title}</td>

                <td className="p-3 border">
                  {ev.date ? ev.date : "N/A"} {ev.time ? `(${ev.time})` : ""}
                </td>

                <td className="p-3 border">{ev.venue || "N/A"}</td>

                <td className="p-3 border text-center">
                  {ev.price ? `${ev.price} ${ev.currency}` : "Free"}
                </td>

                <td className="p-3 border text-center">{ev.priority}</td>

                <td className="p-3 border text-center">
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">
                      View
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
