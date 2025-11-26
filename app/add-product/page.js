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

  // Redirect if not logged in
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

  if (loading || !user) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 shadow rounded-md"
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="shortDesc"
          placeholder="Short Description"
          value={form.shortDesc}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="fullDesc"
          placeholder="Full Description"
          value={form.fullDesc}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={4}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>

        <input
          name="image"
          placeholder="Optional Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
