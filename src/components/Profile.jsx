import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://smart-agro-backend-08do.onrender.com";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/Login");
      return;
    }

    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to load profile");
        return;
      }

      setUser(data.user);
    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading Profile...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 pt-28 px-5 pb-10">

      <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">
        My Profile 👤
      </h1>

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="w-24 h-24 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-4xl font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="mt-8">

          <div className="mb-5">
            <p className="text-gray-500 text-sm">
              Name
            </p>

            <p className="text-xl font-semibold">
              {user?.name}
            </p>
          </div>

          <div className="mb-5">
            <p className="text-gray-500 text-sm">
              Email
            </p>

            <p className="text-xl font-semibold break-all">
              {user?.email}
            </p>
          </div>

        </div>

        <div className="flex flex-col gap-3 mt-6">

          <button
            onClick={() => navigate("/Orders")}
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            My Orders 📦
          </button>

          <button
            onClick={() => navigate("/Products")}
            className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
          >
            Continue Shopping 🛒
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;