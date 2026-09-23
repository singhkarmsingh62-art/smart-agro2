import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_URL = "https://smart-agro-backend-08do.onrender.com";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">
          Product not found
        </h2>

        <button
          onClick={() => navigate("/Products")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const addToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to add product");
        return;
      }

      alert("Product added to cart 🛒");
      navigate("/Cart");
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  const buyNow = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login");
      return;
    }

    navigate("/Order", {
      state: {
        product,
        buyNow: true,
      },
    });
  };

  return (
    <div className="min-h-screen bg-orange-50 pt-28 px-5 pb-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl"
          />

          <div>
            <p className="text-orange-500 font-semibold">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-green-600 mt-5">
              ₹{Number(product.price).toLocaleString()}
            </p>

            <p className="text-gray-600 mt-5">
              High quality agricultural equipment suitable for
              farming and agricultural work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={addToCart}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
              >
                Add to Cart 🛒
              </button>

              <button
                onClick={buyNow}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>

            <button
              onClick={() => navigate("/Products")}
              className="mt-5 text-orange-600 underline"
            >
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}