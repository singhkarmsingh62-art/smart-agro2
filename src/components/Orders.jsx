import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://smart-agro-backend-08do.onrender.com";

const Orders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/Login");
      return;
    }

    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/order/my-orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to load orders");
        return;
      }

      setOrders(data);
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
          Loading Orders...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 pt-28 px-5 pb-10">

      <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">
        My Orders 📦
      </h1>

      {orders.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-5">
            You have no orders yet.
          </p>

          <button
            onClick={() => navigate("/Products")}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">

          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-md p-5 mb-6"
            >

              <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">

                <div>
                  <p className="font-semibold">
                    Order ID:
                  </p>

                  <p className="text-gray-500 text-sm">
                    {order._id}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    Status:
                  </p>

                  <p className="text-green-600 font-semibold">
                    {order.status}
                  </p>
                </div>

              </div>

              {order.products.map((product, index) => (
                <div
                  key={product._id || index}
                  className="flex items-center gap-4 border-t pt-4 mt-4"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-lg font-bold">
                      {product.name}
                    </h2>

                    <p className="text-gray-500">
                      {product.category}
                    </p>

                    <p className="text-green-600 font-semibold">
                      ₹{Number(product.price).toLocaleString()}
                    </p>
                  </div>

                </div>
              ))}

              <div className="border-t mt-5 pt-4 flex justify-between">

                <span className="text-xl font-bold">
                  Total:
                </span>

                <span className="text-xl font-bold text-green-600">
                  ₹{Number(order.totalAmount).toLocaleString()}
                </span>

              </div>

              <p className="text-gray-500 text-sm mt-3">
                Ordered on:{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Orders;