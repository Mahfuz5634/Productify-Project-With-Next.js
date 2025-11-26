"use client";

import { useState } from "react";
import { registerUser, googleLogin } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(name, email, password);
      router.push("/");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h1>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 w-full mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Register Button */}
        <button
          className="bg-blue-600 text-white py-2 rounded w-full mb-3"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogle}
          className="bg-red-500 text-white py-2 rounded w-full"
        >
          Sign up with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
