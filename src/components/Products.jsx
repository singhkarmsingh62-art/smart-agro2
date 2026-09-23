import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://smart-agro-backend-08do.onrender.com";

const categories = [
  {
    name: "Harvester",
    image:
      "https://thumbs.dreamstime.com/b/john-deere-grain-harvesters-work-combine-harvester-straw-chopper-works-wheat-field-dust-plume-behind-combine-294043671.jpg",
  },
  {
    name: "Straw Reaper",
    image:
      "https://media.istockphoto.com/id/122705686/photo/tractor-collecting-haystack-in-the-field.jpg",
  },
  {
    name: "Tools",
    image:
      "https://images.unsplash.com/photo-1668303672808-6e8d7cae3fdc",
  },
];

const products = [
  {
    name: "Matharu 4600",
    price: 2750000,
    category: "Harvester",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/416406476/BZ/PD/MC/8915389/matharu-4600-combine-harvester-1000x1000.jpeg",
  },
  {
    name: "Malkit 997",
    price: 2950000,
    category: "Harvester",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/5/513947610/DP/HZ/CK/246477778/malkit-997-deluxe-self-propelled-combine-harvester-1000x1000.jpeg",
  },
  {
    name: "Kartar 4000",
    price: 2550000,
    category: "Harvester",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/1/OT/RV/LJ/182090528/kartar-4000-combine-harvester-1000x1000.jpg",
  },
  {
    name: "Malkit Reaper",
    price: 350000,
    category: "Straw Reaper",
    image:
      "http://5.imimg.com/data5/SELLER/Default/2024/5/417190871/AL/VM/PP/113660199/malkit-straw-reaper-1000x1000.jpg",
  },
  {
    name: "New Vishavkarma",
    price: 450000,
    category: "Straw Reaper",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/12/372507109/LJ/QD/QW/204331912/agriculture-straw-reaper-1000x1000.jpeg",
  },
  {
    name: "Mahindra Reaper",
    price: 550000,
    category: "Straw Reaper",
    image:
      "https://mahindrafarmmachinery.com/sites/default/files/2023-12/Mahindra%20Straw%20Reaper%202.png",
  },
  {
    name: "Cultivator",
    price: 50000,
    category: "Tools",
    image:
      "https://www.rataequipment.com/hubfs/Cultivation/812/812%20FT%20MaxitTill%20Working.jpg",
  },
  {
    name: "Plough",
    price: 55000,
    category: "Tools",
    image:
      "https://www.shutterstock.com/image-photo/painswick-gloucestershire-uk-10092012-ploughing-600nw-2671236935.jpg",
  },
  {
    name: "Trolley",
    price: 550000,
    category: "Tools",
    image:
      "https://content.jdmagicbox.com/comp/jalandhar/z3/0181px181.x181.200519231454.p1z3/catalogue/baldev-singh-and-co-phillaur-jalandhar-agricultural-equipment-manufacturers-bph465jygw.jpg",
  },
];

export default function Products() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000000);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");

  // Load logged-in user's cart from backend
  useEffect(() => {
    const loadCart = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setCart([]);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setCart(data.products || []);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log("Cart loading error:", error);
      }
    };

    loadCart();
  }, []);

  // Filter products
  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;

    const priceMatch = item.price <= maxPrice;

    return categoryMatch && priceMatch;
  });

  // Add product to cart
  const addToCart = async (product) => {
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
        setToast(data.message || "Failed to add product");
        return;
      }

      setCart(data.cart?.products || []);

      setToast(`${product.name} added to cart 🛒`);

      setTimeout(() => {
        setToast("");
      }, 2000);
    } catch (error) {
      console.log("Add to cart error:", error);
      setToast("Server error");
    }
  };

  // View product details
  const viewDetails = (product) => {
    navigate("/ProductDetails", {
      state: { product },
    });
  };

  // Buy Now
  const buyNow = (product) => {
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
    <>
      {/* Toast Message */}
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white text-orange-700 px-5 py-3 rounded-lg shadow-lg z-50">
          {toast}
        </div>
      )}

      <div className="flex flex-col mt-14 md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4 mt-20 pr-2 bg-orange-100 ml-5 pl-2 rounded-2xl shadow">
          <h2 className="text-4xl font-bold mb-2 px-5 mt-10">
            Filters
          </h2>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold text-3xl px-5 mb-6">
              Categories
            </h3>

            <button
              onClick={() => setSelectedCategory("All")}
              className={`w-full text-left cursor-pointer px-5 py-3 mb-2 rounded ${
                selectedCategory === "All"
                  ? "bg-orange-500 text-white"
                  : "bg-orange-50"
              }`}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full text-left cursor-pointer px-5 py-3 mb-2 rounded ${
                  selectedCategory === category.name
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="px-5">
            <h3 className="font-semibold mb-2">
              Max Price: ₹{maxPrice.toLocaleString()}
            </h3>

            <input
              type="range"
              min="50000"
              max="3000000"
              step="50000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full cursor-pointer"
            />

            <img
              src="https://tse2.mm.bing.net/th/id/OIP.TA_jI4GgM1D3NtN7K0l-IAHaHa?pid=Api&P=0&h=180"
              alt="Agriculture"
              className="rounded-full ml-9 mt-10 object-contain"
            />

            <div className="hidden md:block mt-12 relative">
              <video
                src="https://media.istockphoto.com/id/1006456396/video/golden-fields.mp4?s=mp4-640x640-is&k=20&c=jUwT3btplHDx6qfdqt7N_26H-t1NuPmXVQhKSrnaaWg="
                autoPlay
                loop
                muted
                playsInline
                className="w-[330px] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full mt-20 pb-5 rounded-2xl pl-5 pr-5 bg-orange-100 md:w-3/4">

          {/* Cart Count */}
          <div className="flex justify-end mb-4">
            <div className="bg-green-600 text-white px-4 py-2 rounded-full">
              Cart: {cart.length}
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">
              No products found 😢
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.name}
                  className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />

                  <h3 className="mt-3 font-bold">
                    {product.name}
                  </h3>

                  <p className="text-green-600 font-semibold">
                    ₹{product.price.toLocaleString()}
                  </p>

                  {/* View Details + Buy Now */}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => viewDetails(product)}
                      className="w-1/2 cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => buyNow(product)}
                      className="w-1/2 cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                      Buy Now
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full cursor-pointer bg-orange-400 text-white py-2 rounded hover:bg-orange-500"
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}