import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const categories = [
    {
    name: "Harvester",
    image: "https://thumbs.dreamstime.com/b/john-deere-grain-harvesters-work-combine-harvester-straw-chopper-works-wheat-field-dust-plume-behind-combine-294043671.jpg",
    },

    {
    name: "Straw Reaper",
    image: "https://5.imimg.com/data5/SELLER/Default/2026/1/579212997/MG/YA/PR/252734488/straw-reaper-63-inch-1000x1000.png",
    },

   {
    name: "Tools",
    image: "https://images.unsplash.com/photo-1668303672808-6e8d7cae3fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWdyaWN1bHR1cmUlMjB0cmFjdG9ycyUyMHRvb2xzfGVufDB8fDB8fHww",
   }

  ];

const products = [
  
   {
    name: "Matharu 4600 ",
    price: "₹27,50,000",
    categories:"Harvester",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/5/416406476/BZ/PD/MC/8915389/matharu-4600-combine-harvester-1000x1000.jpeg",
    description: <p>Engine: 133 HP (Ashok Leyland engine, 6 cylinders, water-cooled).
                  Cutting Width: 14 feet (4500 mm).
                  Capacity: ~4.5 acres/hr (Wheat), ~3.5 acres/hr (Paddy).
                  Straw Walkers: 5 (facilitates efficient separation).
                  Fuel Tank: 340 Liters.
                  Grain Tank: 2.64 (or 2.50 in some variants).
                  Steering: Hydrostatic.
                  Tyres: Front 18.4/15-30, Rear 9.00-16.
                  Weight: Approximately 6,300 kg.
                  Price: ~₹26,50,000 - ₹27,50,000 (excluding taxes). 

                    </p>
       },

   {
    name: "Malkit 997",
    price: "₹29,50,000",
    categories:"Harvester",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/5/513947610/DP/HZ/CK/246477778/malkit-997-deluxe-self-propelled-combine-harvester-1000x1000.jpeg",
    description: <p>The Malkit 997 Deluxe is a heavy-duty, self-propelled, multi-crop combine harvester primarily used for wheat, paddy, and corn. Priced around ₹29 Lakhs, it features a powerful 101 HP Ashok Leyland engine and delivers an impressive working output of 3 to 4 acres per hour. 

                    </p>
  },
  {
    name: "Kartar 4000",
    price: "₹25,50,000",
    categories:"Harvester",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/OT/RV/LJ/182090528/kartar-4000-combine-harvester-1000x1000.jpg",
    description: <p>The Kartar 4000 is a heavy-duty, self-propelled, multi-crop combine harvester designed for large-scale farming. Powered by a robust engine (101 HP to 133 HP), it features a 14-foot cutter bar and can harvest 2.5 to 4 acres per hour. Prices range from ₹25.7 Lakh to ₹37.5 Lakh, depending on the model and cabin configuration. 

                    </p>
  },





   {
    name: "malkit ",
    price: "₹3,50,000",
    categories:"Straw Reaper",
    image: "http://5.imimg.com/data5/SELLER/Default/2024/5/417190871/AL/VM/PP/113660199/malkit-straw-reaper-1000x1000.jpg",
    description: "A straw reaper is a vital agricultural machine that cuts, threshes, and cleans crop residues in a single, efficient operation. Here are the best description lines for a straw reaper, categorized by their focus:."
  },
  {
    name: "new vishavkarma ",
    price: "₹4,50,000",
    categories:"Straw Reaper",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372507109/LJ/QD/QW/204331912/agriculture-straw-reaper-1000x1000.jpeg",
    description: "A straw reaper is a vital agricultural machine that cuts, threshes, and cleans crop residues in a single, efficient operation. Here are the best description lines for a straw reaper, categorized by their focus:."
  },
  {
    name: "Mahindra",
    price: "₹5,50,000",
    categories:"Straw Reaper",
    image: "https://mahindrafarmmachinery.com/sites/default/files/2023-12/Mahindra%20Straw%20Reaper%202.png",
    description: "A straw reaper is a vital agricultural machine that cuts, threshes, and cleans crop residues in a single, efficient operation. Here are the best description lines for a straw reaper, categorized by their focus: ."
  },






   {
    name: "Cultivators ",
    price: "₹50,000",
    categories:"Tools",
    image: "https://www.rataequipment.com/hubfs/Cultivation/812/812%20FT%20MaxitTill%20Working.jpg",
    description: "Cultivators are versatile, secondary tillage implements designed to break up soil, aerate the ground, control weeds, and prepare a smooth, for cultivators, categorized by their primary selling points and functions."
  },
    {
    name: "Plough ",
    price: "₹55,000",
    categories:"Tools",
    image: "https://www.shutterstock.com/image-photo/painswick-gloucestershire-uk-10092012-ploughing-600nw-2671236935.jpg",
    description: "A plough is a fundamental agricultural tool designed to cut, lift, and turn over soil to prepare it for planting. It is used to loosen the ground, aerate it, and bury weeds or crop residues.."
  },
   {
    name: "Trolley  ",
    price: "₹5,50,000",
    categories:"Tools",
    image: "https://content.jdmagicbox.com/comp/jalandhar/z3/0181px181.x181.200519231454.p1z3/catalogue/baldev-singh-and-co-phillaur-jalandhar-agricultural-equipment-manufacturers-bph465jygw.jpg",
    description: "Agricultural trolleys are designed for heavy-duty farm use, offering durable transportation for crops, tools, and fertilizers. Below are the best description lines categorized by their focus, based on product features and market listings.."
  }
  ]



  const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = 
  selectedCategory === "All" ? products : products.filter(p => p.categories === selectedCategory);

  return (
    <div className="bg-orange-50 mt-10 min-h-screen">
  
      {/* Hero Section */}
      <section className="h-[100vh] bg-cover bg-center flex items-center px-8"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1565647952915-9644fcd446a4?q=80&w=870&auto=format&fit=crop')"}}
      >
        
        <div className="flex w-full item-center justify-between">
        <div className="bg-white/20 p-2 py-10  rounded-xl shadow-md  " >
           <h1 className="text-2xl md:text-4xl font-bold mb-4"><span >Modren Farming</span> Starts Here</h1>
           <p className="mb-5 text-lg ">Buy premium agricultural equipment or request <br/>
             expert repair service for your machinery, all in one place.</p>
        
        
        
        <button   className="bg-orange-300  font-medium hover:scale-105 transition px-6 py-2 rounded-lg text-lg shadow-md cursor-pointer"
         onClick={()=>  
          {
             document.getElementById("categories").scrollIntoView({behavior: 'smooth'});
          
          }}
          >Shop Now</button>
          <button   className="bg-orange-300  font-medium hover:scale-105 transition px-5 py-2  rounded-lg text-lg shadow-md ml-4 cursor-pointer"
            onClick={() => navigate("/service")}
           >Book a Repair</button>
          </div>

 

     </div>
    </section>




      {/* Categories */}
        <section id="categories" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-800 mb-2">Shop by Category</h2>
          <p className="text-gray-500">Select a category to filter the machinery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat.name);
                document.getElementById("products").scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ${
                selectedCategory === cat.name ? "ring-8 ring-orange-400" : "hover:-translate-y-3"
              }`}
            >
              <img src={cat.image} alt={cat.name} className="h-72 w-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
                <h3 className="text-white text-2xl font-bold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Products Grid */}
        <section id="products" className="py-20  bg-white rounded-t-[1rem] shadow-inner">
        <div className="max-w-7xl mx-auto">
        <div className="flex justify-between item-center mb-12">
         <h2 className="text-4xl  font-bold text-gray-800 ">Available Machinery</h2>
            {selectedCategory !== "All" && (
              <button onClick={() => setSelectedCategory("All")} className="text-orange-600 font-bold  bg-orange-200 rounded-lg px-2 hover:scale-105 cursor-pointer "> Show All</button>
            )}
          </div>
          <div className="bg-orange-50 grid grid-cols-1 sm:grid-cols-3   lg:grid-cols-3 gap-10">
            {filteredProducts.map((product, index) => (
            <div className="bg-white mt-10 mb-10 mr-5 ml-5  rounded-2xl  shadow-sm border border-orange-100 overflow-hidden hover:shadow-xl transition-all duration-300" key={index}>
            <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
            <div className="p-6">
             <h3 className="font-bold text-xl text-gray-800 mb-1">{product.name}</h3>
              <p className="text-green-600 font-black text-xl">{product.price}</p>
             
             <button 
             onClick={() => setSelectedItem(product)}  
               className="mt-6 w-full bg-orange-500 cursor-pointer text-white py-3.5 rounded-2xl font-bold hover:bg-orange-600 shadow-md transition"
              >View Details</button>
             
              </div>
              </div> 
              ))}
           </div>
           </div>
          </section>



      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
        <div className="bg-white rounded-[1rem] p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button onClick={() => setSelectedItem(null)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 text-2xl">✕</button>
        <div className="flex flex-col md:flex-row gap-8">
        <img src={selectedItem.image} alt={selectedItem.name} className="h-72 w-full md:w-1/2 object-cover rounded-3xl shadow-lg" />
        <div className="flex-1">
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{selectedItem.categories}</span>
        <h2 className="text-4xl font-black text-gray-900 mt-4 leading-tight">{selectedItem.name}</h2>
        <p className="text-green-600 font-black text-3xl mt-2">{selectedItem.price}</p>
        <div className="mt-8">
        <h4 className="font-bold text-gray-800 border-b pb-2 mb-3">Specifications:</h4>
        <p className="text-gray-600 leading-relaxed italic">{selectedItem.description}</p>
        </div>
        </div>
        </div>
        <button onClick={() => setSelectedItem(null)} className="mt-10 w-full bg-orange-500 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition shadow-lg">Close View</button>
        </div>
        </div>
        )}
       </div>
     );
 };

export default Home;