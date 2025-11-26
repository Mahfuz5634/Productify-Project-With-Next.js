"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import toast from "react-hot-toast";

const AddProductPage = () => {
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

    const productData = {
      ...form,
      userEmail: user?.email,
    };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Product added successfully!");
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
      toast.error("Error adding product");
    }
  };

  if (loading || !user)
    return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-8 shadow-xl rounded-xl border border-gray-200"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-sm mb-1 font-medium text-gray-600">
              Product Title
            </label>
            <input
              name="title"
              placeholder="Product Title"
              value={form.title}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1 font-medium text-gray-600">
              Price
            </label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm mb-1 font-medium text-gray-600">
            Short Description
          </label>
          <input
            name="shortDesc"
            placeholder="Short Description"
            value={form.shortDesc}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-1 font-medium text-gray-600">
            Full Description
          </label>
          <textarea
            name="fullDesc"
            placeholder="Full Description"
            value={form.fullDesc}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            rows={4}
            required
          />
        </div>

        {/* Grid row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm mb-1 font-medium text-gray-600">
              Date
            </label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm mb-1 font-medium text-gray-600">
              Priority
            </label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm mb-1 font-medium text-gray-600">
            Product Image URL
          </label>
          <input
            name="image"
            placeholder="Optional Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
