
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://smart-agro-backend-08do.onrender.com";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMessage("");
  };

  // Login / Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // Validation
    if (!form.email || !form.password || (!isLogin && !form.name)) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const url = isLogin
        ? `${API_URL}/api/auth/login`
        : `${API_URL}/api/auth/signup`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      // Backend error
      if (!response.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      // LOGIN SUCCESS
      if (isLogin) {
        // Save JWT token
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Save user information
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        setMessage("Login successful!");

        // Clear form
        setForm({
          name: "",
          email: "",
          password: "",
        });

        // Go to Products
        setTimeout(() => {
          navigate("/Products");
        }, 500);
      }

      // SIGNUP SUCCESS
      else {
        setMessage("Account created successfully. Please login.");

        setForm({
          name: "",
          email: "",
          password: "",
        });

        // Switch to Login
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Authentication error:", error);

      setError(
        "Unable to connect to server. Please make sure backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // Switch Login / Signup
  const handleModeChange = () => {
    setIsLogin(!isLogin);

    setForm({
      name: "",
      email: "",
      password: "",
    });

    setError("");
    setMessage("");
  };

  return (
    <div className="mt-10">
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/039/641/483/small_2x/ai-generated-endless-fields-of-ripe-wheat-with-mountains-in-the-backdrop-a-scenic-rural-landscape-ai-generated-photo.jpg')",
        }}
      >
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name - Signup only */}
            {!isLogin && (
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete={
                  isLogin ? "current-password" : "new-password"
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-600 text-center text-sm">
                {error}
              </p>
            )}

            {/* Success */}
            {message && (
              <p className="text-green-600 text-center text-sm">
                {message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-400 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition disabled:opacity-60"
            >
              {loading
                ? "Please wait..."
                : isLogin
                ? "Login"
                : "Create Account"}
            </button>
          </form>

          {/* Switch Login / Signup */}
          <p className="text-center mt-4 text-gray-600">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={handleModeChange}
              className="text-orange-500 font-semibold cursor-pointer ml-1"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

