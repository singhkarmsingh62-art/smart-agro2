
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://smart-agro-backend-08do.onrender.com";

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/Login");
      return;
    }

    fetchCart();
  }, []);

  // Get cart from backend
  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to load cart");
        return;
      }

      setCart(data.products || []);
    } catch (error) {
      console.log("Fetch cart error:", error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Remove product
  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(
        `${API_URL}/api/cart/remove/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to remove product");
        return;
      }

      setCart(data.cart?.products || []);
    } catch (error) {
      console.log("Remove cart error:", error);
      alert("Server error. Please try again.");
    }
  };

  // Order Now
  const orderNow = () => {
    navigate("/Order", {
      state: {
        products: cart,
        orderFromCart: true,
      },
    });
  };

  // Total price
  const totalPrice = cart.reduce(
    (total, product) => total + Number(product.price || 0),
    0
  );

  if (!token) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading Cart...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 pt-24 px-5 pb-10">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-5">
            Your cart is empty.
          </p>

          <button
            onClick={() => navigate("/Products")}
            className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 cursor-pointer"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {cart.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md p-4 mb-4 flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div>
                  <h2 className="text-xl font-bold">
                    {product.name}
                  </h2>

                  <p className="text-green-600 font-semibold">
                    ₹{Number(product.price || 0).toLocaleString()}
                  </p>

                  {product.category && (
                    <p className="text-gray-500 text-sm">
                      {product.category}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => removeFromCart(product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="bg-white rounded-xl shadow-md p-5 mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Total:
            </h2>

            <p className="text-2xl font-bold text-green-600">
              ₹{totalPrice.toLocaleString()}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <button
              onClick={() => navigate("/Products")}
              className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 cursor-pointer"
            >
              Continue Shopping
            </button>

            <button
              onClick={orderNow}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer"
            >
              Order Now 🛍️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

