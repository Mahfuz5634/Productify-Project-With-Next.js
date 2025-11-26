"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add API call later
    toast.success("Message sent! We will contact you soon.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Have questions, suggestions, or feedback?  
          Fill out the form below — we’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-8 space-y-5"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow p-8 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <p className="mb-2">📧 Email: support@eventify.com</p>
          <p className="mb-2">📍 Location: Dhaka, Bangladesh</p>
          <p>🕒 Available: 9 AM - 8 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
