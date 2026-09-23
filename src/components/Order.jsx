
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_URL = "https://smart-agro-backend-08do.onrender.com";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Buy Now se ek product
  const singleProduct = location.state?.product;

  // Cart se multiple products
  const cartProducts = location.state?.products || [];

  const products = singleProduct ? [singleProduct] : cartProducts;

  const totalAmount = products.reduce(
    (total, product) => total + Number(product.price || 0),
    0
  );

  // =====================================================
  // LOAD RAZORPAY SCRIPT
  // =====================================================
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );

      if (existingScript) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  // =====================================================
  // COD ORDER
  // =====================================================
  const createCODOrder = async () => {
    const response = await fetch(
      `${API_URL}/api/order/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products,
          paymentMethod,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Order failed");
    }

    setOrderPlaced(true);
  };

  // =====================================================
  // RAZORPAY PAYMENT
  // =====================================================
  const startRazorpayPayment = async () => {
    // Load Razorpay checkout
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your internet.");
      return;
    }

    // Create Razorpay order from backend
    const response = await fetch(
      `${API_URL}/api/order/razorpay/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to create Razorpay order"
      );
    }

    const razorpayOrder = data.razorpayOrder;

    // Razorpay checkout options
    const options = {
      key: razorpayOrder.key_id || undefined,

      amount: razorpayOrder.amount,

      currency: razorpayOrder.currency,

      name: "Smart Agro",

      description: "Smart Agro Order",

      order_id: razorpayOrder.id,

      handler: async function (paymentResponse) {
        try {
          setLoading(true);

          // Verify payment on backend
          const verifyResponse = await fetch(
            `${API_URL}/api/order/razorpay/verify`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                products,
                paymentMethod,

                razorpay_order_id:
                  paymentResponse.razorpay_order_id,

                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,

                razorpay_signature:
                  paymentResponse.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyResponse.json();

          if (!verifyResponse.ok) {
            alert(
              verifyData.message ||
                "Payment verification failed"
            );
            return;
          }

          // Payment + order successful
          setOrderPlaced(true);
        } catch (error) {
          console.log("Payment Verification Error:", error);
          alert("Payment verification failed");
        } finally {
          setLoading(false);
        }
      },

      prefill: {
        name: "",
        email: "",
        contact: "",
      },

      notes: {
        address: "Smart Agro",
      },

      theme: {
        color: "#16a34a",
      },

      modal: {
        ondismiss: function () {
          setLoading(false);
        },
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.on("payment.failed", function (response) {
      console.log("Payment Failed:", response.error);

      alert(
        response.error.description ||
          "Payment failed. Please try again."
      );

      setLoading(false);
    });

    paymentObject.open();
  };

  // =====================================================
  // PLACE ORDER
  // =====================================================
  const placeOrder = async () => {
    if (!token) {
      navigate("/Login");
      return;
    }

    if (products.length === 0) {
      alert("No product selected");
      navigate("/Products");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    setLoading(true);

    try {
      // COD
      if (paymentMethod === "Cash on Delivery") {
        await createCODOrder();
      } else {
        // UPI / Card / Net Banking
        await startRazorpayPayment();
      }
    } catch (error) {
      console.log("Order Error:", error);
      alert(error.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOGIN CHECK
  // =====================================================
  if (!token) {
    navigate("/Login");
    return null;
  }

  // =====================================================
  // SUCCESS SCREEN
  // =====================================================
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center px-5">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">

          <div className="text-6xl mb-4">
            ✅
          </div>

          <h1 className="text-3xl font-bold text-green-600 mb-3">
            Order Successfully!
          </h1>

          <p className="text-gray-600 mb-4">
            Your order has been placed successfully.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">

            <p className="text-gray-600">
              Payment Method
            </p>

            <p className="text-lg font-bold text-gray-800 mt-1">
              {paymentMethod}
            </p>

            <p className="text-gray-600 mt-2">
              Total Amount
            </p>

            <p className="text-xl font-bold text-green-600">
              ₹{totalAmount.toLocaleString()}
            </p>

          </div>

          <div className="flex flex-col gap-3">

            <button
              onClick={() => navigate("/Orders")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              My Orders
            </button>

            <button
              onClick={() => navigate("/Products")}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Continue Shopping
            </button>

          </div>

        </div>
      </div>
    );
  }

  // =====================================================
  // ORDER PAGE
  // =====================================================
  return (
    <div className="min-h-screen bg-orange-50 pt-28 px-5 pb-10">

      <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">
        Confirm Your Order 🛍️
      </h1>

      {products.length === 0 ? (
        <div className="text-center">

          <p className="text-xl text-gray-600 mb-5">
            No product selected.
          </p>

          <button
            onClick={() => navigate("/Products")}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg"
          >
            Browse Products
          </button>

        </div>
      ) : (
        <div className="max-w-4xl mx-auto">

          {/* PRODUCTS */}
          {products.map((product, index) => (
            <div
              key={product._id || index}
              className="bg-white rounded-xl shadow-md p-5 mb-4 flex items-center gap-5"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>

                <h2 className="text-xl font-bold">
                  {product.name}
                </h2>

                <p className="text-gray-500">
                  {product.category}
                </p>

                <p className="text-green-600 font-bold mt-1">
                  ₹{Number(product.price || 0).toLocaleString()}
                </p>

              </div>

            </div>
          ))}

          {/* TOTAL */}
          <div className="bg-white rounded-xl shadow-md p-5 mt-6 flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              Total Amount:
            </h2>

            <p className="text-2xl font-bold text-green-600">
              ₹{totalAmount.toLocaleString()}
            </p>

          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-6">

            <h2 className="text-2xl font-bold mb-5">
              Select Payment Method 💳
            </h2>

            <div className="space-y-3">

              {/* UPI */}
              <label
                className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition ${
                  paymentMethod === "UPI"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200"
                }`}
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="w-5 h-5"
                />

                <div>
                  <p className="font-semibold text-lg">
                    📱 UPI
                  </p>

                  <p className="text-sm text-gray-500">
                    Google Pay, PhonePe, Paytm, etc.
                  </p>
                </div>

              </label>

              {/* CARD */}
              <label
                className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition ${
                  paymentMethod === "Credit/Debit Card"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200"
                }`}
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit/Debit Card"
                  checked={
                    paymentMethod === "Credit/Debit Card"
                  }
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="w-5 h-5"
                />

                <div>
                  <p className="font-semibold text-lg">
                    💳 Credit / Debit Card
                  </p>

                  <p className="text-sm text-gray-500">
                    Visa, Mastercard, RuPay, etc.
                  </p>
                </div>

              </label>

              {/* NET BANKING */}
              <label
                className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition ${
                  paymentMethod === "Net Banking"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200"
                }`}
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="Net Banking"
                  checked={paymentMethod === "Net Banking"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="w-5 h-5"
                />

                <div>
                  <p className="font-semibold text-lg">
                    🏦 Net Banking
                  </p>

                  <p className="text-sm text-gray-500">
                    Pay using your bank account.
                  </p>
                </div>

              </label>

              {/* COD */}
              <label
                className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition ${
                  paymentMethod === "Cash on Delivery"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200"
                }`}
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={
                    paymentMethod === "Cash on Delivery"
                  }
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="w-5 h-5"
                />

                <div>
                  <p className="font-semibold text-lg">
                    💵 Cash on Delivery
                  </p>

                  <p className="text-sm text-gray-500">
                    Pay when your order is delivered.
                  </p>
                </div>

              </label>

            </div>
          </div>

          {/* PLACE ORDER */}
          <button
            onClick={placeOrder}
            disabled={loading}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading
              ? "Processing..."
              : paymentMethod === "Cash on Delivery"
              ? "Place Order 🛍️"
              : "Pay Now 💳"}
          </button>

          {/* CONTINUE SHOPPING */}
          <button
            onClick={() => navigate("/Products")}
            className="w-full mt-3 bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500"
          >
            Continue Shopping
          </button>

        </div>
      )}

    </div>
  );
};

export default Order;

