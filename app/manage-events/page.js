"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function ManageEvents() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

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
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Manage Events
      </h1>

      <div className="overflow-x-auto shadow-xl border rounded-xl bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border-b font-semibold">Title</th>
              <th className="p-4 border-b font-semibold">Date</th>
              <th className="p-4 border-b font-semibold">Venue</th>
              <th className="p-4 border-b font-semibold text-center">Price</th>
              <th className="p-4 border-b font-semibold text-center">Priority</th>
              <th className="p-4 border-b font-semibold text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No events available
                </td>
              </tr>
            )}

            {events.map((ev) => (
              <tr
                key={ev._id}
                className="hover:bg-gray-50 transition border-b"
              >
                <td className="p-4">{ev.title}</td>

                <td className="p-4">
                  {ev.date ? ev.date : "N/A"}{" "}
                  {ev.time ? <span className="text-gray-500">({ev.time})</span> : ""}
                </td>

                <td className="p-4">{ev.venue || "N/A"}</td>

                <td className="p-4 text-center">
                  {ev.price ? (
                    <span className="font-medium">
                      {ev.price} {ev.currency}
                    </span>
                  ) : (
                    <span className="text-green-600 font-semibold">Free</span>
                  )}
                </td>

                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      ev.priority === "High"
                        ? "bg-red-500"
                        : ev.priority === "Normal"
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {ev.priority || "N/A"}
                  </span>
                </td>

                <td className="p-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                      View
                    </button>
                    <button className="px-4 py-1.5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
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
