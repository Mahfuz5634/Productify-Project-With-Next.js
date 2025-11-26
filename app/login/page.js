"use client";

import { useState } from "react";
import { loginUser, googleLogin } from "@/lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginUser(email, password);
      toast.success("Logged in successfully!");

      setTimeout(() => router.push("/"), 800);
    } catch (error) {
      toast.error(error.message || "Login failed");
    }

    setLoading(false);
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");

      setTimeout(() => router.push("/dashboard"), 800);
    } catch (error) {
      toast.error(error.message || "Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen 
      bg-gradient-to-br from-blue-900 via-black to-gray-900 rounded-xl md:my-10 p-6">

      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl 
        w-full max-w-md border border-white/10"
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Login to your account
        </p>

        {/* Email */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-3 top-4 text-gray-300" />
          <input
            type="email"
            placeholder="Email Address"
            className="pl-10 border border-gray-400/30 bg-white/20 text-white 
            p-3 w-full rounded placeholder-gray-300 focus:outline-none 
            focus:border-blue-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <FaLock className="absolute left-3 top-4 text-gray-300" />
          <input
            type="password"
            placeholder="Password"
            className="pl-10 border border-gray-400/30 bg-white/20 text-white 
            p-3 w-full rounded placeholder-gray-300 focus:outline-none
            focus:border-blue-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login Button */}
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg 
          w-full font-semibold transition active:scale-95 shadow-lg mb-4"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogle}
          className="flex items-center justify-center gap-2 bg-white 
          text-black py-3 rounded-lg w-full font-semibold shadow-md
          hover:bg-gray-100 transition active:scale-95"
        >
          <FcGoogle className="text-2xl" />
          Login with Google
        </button>

        <p className="text-center mt-6 text-gray-300">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-300 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
