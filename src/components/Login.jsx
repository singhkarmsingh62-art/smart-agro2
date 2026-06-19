import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
 

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || (!isLogin && !form.name)) {
      alert("Please fill all fields");
      return;
    }

    if (isLogin) {
      console.log("Login Data:", form);
      setSuccess("✅ Login Successful!");
    } else {
      console.log("Signup Data:", form);
      setSuccess("✅ Account Created Successfully!");
    }

    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="mt-10">
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/039/641/483/small_2x/ai-generated-endless-fields-of-ripe-wheat-with-mountains-in-the-backdrop-a-scenic-rural-landscape-ai-generated-photo.jpg')",
      }}
    >
 


      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

    
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

    
        <form onSubmit={handleSubmit} className="space-y-5">

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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          )}

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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            />
          </div>

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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        
        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setSuccess("");
            }}
            className="text-orange-500 font-semibold cursor-pointer ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

    
        {success && (
          <p className="text-green-600 text-center mt-4">{success}</p>
        )}
      </div>
    </div>
     
    </div>
  );
};

export default Login;