import React, { useState, useEffect } from "react";

const categories = [
  {
    name: "Harvester",
    image: "https://thumbs.dreamstime.com/b/john-deere-grain-harvesters-work-combine-harvester-straw-chopper-works-wheat-field-dust-plume-behind-combine-294043671.jpg",
  },
  {
    name: "Straw Reaper",
    image: "https://media.istockphoto.com/id/122705686/photo/tractor-collecting-haystack-in-the-field.jpg",
  },
  {
    name: "Tools",
    image: "https://images.unsplash.com/photo-1668303672808-6e8d7cae3fdc",
  },
];

const products = [
  { name: "Matharu 4600", price: 2750000, category: "Harvester", image: "https://5.imimg.com/data5/SELLER/Default/2024/5/416406476/BZ/PD/MC/8915389/matharu-4600-combine-harvester-1000x1000.jpeg" },
  { name: "Malkit 997", price: 2650000, category: "Harvester", image: "https://5.imimg.com/data5/SELLER/Default/2025/5/513947610/DP/HZ/CK/246477778/malkit-997-deluxe-self-propelled-combine-harvester-1000x1000.jpeg" },
  { name: "Kartar 4000", price: 2150000, category: "Harvester", image: "https://5.imimg.com/data5/SELLER/Default/2023/1/OT/RV/LJ/182090528/kartar-4000-combine-harvester-1000x1000.jpg" },
  { name: "Malkit Reaper", price: 350000, category: "Straw Reaper", image: "http://5.imimg.com/data5/SELLER/Default/2024/5/417190871/AL/VM/PP/113660199/malkit-straw-reaper-1000x1000.jpg" },
  { name: "New Vishavkarma", price: 450000, category: "Straw Reaper", image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372507109/LJ/QD/QW/204331912/agriculture-straw-reaper-1000x1000.jpeg" },
  { name: "Mahindra Reaper", price: 550000, category: "Straw Reaper", image: "https://mahindrafarmmachinery.com/sites/default/files/2023-12/Mahindra%20Straw%20Reaper%202.png" },
  { name: "Cultivator", price: 50000, category: "Tools", image: "https://www.rataequipment.com/hubfs/Cultivation/812/812%20FT%20MaxitTill%20Working.jpg" },
  { name: "Plough", price: 55000, category: "Tools", image: "https://www.shutterstock.com/image-photo/painswick-gloucestershire-uk-10092012-ploughing-600nw-2671236935.jpg" },
  { name: "Trolley", price: 550000, category: "Tools", image: "https://content.jdmagicbox.com/comp/jalandhar/z3/0181px181.x181.200519231454.p1z3/catalogue/baldev-singh-and-co-phillaur-jalandhar-agricultural-equipment-manufacturers-bph465jygw.jpg" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000000);
  const [cart, setCart] = useState([]);
  
  const [toast, setToast] = useState("");

 

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = products.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.price <= maxPrice
    );
  });

  const addToCart = (product) => {
  setCart([...cart, product]);
  setToast(`${product.name} added to cart 🛒`);

  setTimeout(() => {
    setToast("");
  }, 2000);
};






  return (
    <>
      
       {toast && (
      <div className="fixed top-5 left-100 mt-10 bg-white text-orange-700 px-4 py-2 rounded shadow-lg z-50">
        {toast}
      </div>
    )}




      <div className="flex flex-col mt-14 md:flex-row gap-6">

        
        

    
        
        <div className="md:w-1/4 mt-20 pr-2 bg-orange-100 ml-5 pl-2 rounded-2xl shadow">
          <h2 className="text-4xl font-bold mb-2 px-5 mt-10">Filters</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-3xl px-5 mb-6">Categories</h3>

            <button
              onClick={() => setSelectedCategory("All")}
              className={`w-full text-left cursor-pointer px-5 py-3 mb-2 rounded
              ${selectedCategory === "All" ? "bg-orange-500 text-white" : "bg-orange-50"}`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`w-full text-left cursor-pointer px-5 py-3 mb-2 rounded
                ${selectedCategory === cat.name ? "bg-orange-500 text-white" : "bg-orange-50"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div>
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
    
    className="rounded-full ml-14 mt-10 object-contain"
  />
  
 <div className="hidden mt-12 md:block relative w-[400] ">
    <video 
      src="https://media.istockphoto.com/id/1006456396/video/golden-fields.mp4?s=mp4-640x640-is&k=20&c=jUwT3btplHDx6qfdqt7N_26H-t1NuPmXVQhKSrnaaWg="
      autoPlay
      loop
      muted
      className="w-[330px] rounded-xl shadow-lg"  
    />
  
  </div>
          </div>
        </div>

    
        <div className="w-full mt-20 pb-5 rounded-2xl pl-5 pr-5 bg-orange-100 md:w-3/4">

    
          <div className="flex justify-end mb-4">
            <div className="bg-green-600 text-white px-4 py-2 rounded-full">
              Cart: {cart.length}
            </div>
          </div>





    
         
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found 😢</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
                  <img src={item.image} className="w-full h-40 object-cover rounded" />
                  <h3 className="mt-3 font-bold">{item.name}</h3>
                  <p className="text-green-600 font-semibold">₹{item.price.toLocaleString()}</p>

                  <button
                    onClick={() => addToCart(item)}
                    className="mt-3 w-full cursor-pointer bg-orange-400 text-white py-2 rounded hover:bg-orange-500"
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