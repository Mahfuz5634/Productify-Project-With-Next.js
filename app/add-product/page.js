"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import toast from "react-hot-toast";

const AddEventPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    date: "",
    priority: "",
    image: "",
  });

  // Redirect if user not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      ...form,
      userEmail: user?.email,
    };

    // IMPORTANT → must match your API route: /api/events
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Event added successfully!");

      // Reset form fields
      setForm({
        title: "",
        shortDesc: "",
        fullDesc: "",
        price: "",
        date: "",
        priority: "",
        image: "",
      });
    } else {
      toast.error("Error adding event");
    }
  };

  if (loading || !user)
    return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Add New Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-8 shadow-xl rounded-xl border border-gray-200"
      >
        {/* Title */}
        <div>
          <label className="text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Event Title"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="text-sm font-medium mb-1">Short Description</label>
          <input
            name="shortDesc"
            value={form.shortDesc}
            onChange={handleChange}
            required
            placeholder="Short Description"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="text-sm font-medium mb-1">Full Description</label>
          <textarea
            name="fullDesc"
            value={form.fullDesc}
            onChange={handleChange}
            rows={4}
            required
            placeholder="Full Description"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        {/* Price + Date + Priority */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="text-sm font-medium mb-1">Price</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1">Date</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            >
              <option value="">Select</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="text-sm font-medium mb-1">Optional Image URL</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/event.jpg"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default AddEventPage;
