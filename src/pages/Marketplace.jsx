import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { products, categories } from '../data/dummyData';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">Marketplace</h1>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-neutral-100">
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search tractors, harvesters, tools..."
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <button 
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-xl whitespace-nowrap font-bold text-sm transition-colors ${
                  selectedCategory === "All" ? "bg-green-600 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
             >
                All Items
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap font-bold text-sm transition-colors ${
                    selectedCategory === cat.name ? "bg-green-600 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {cat.name}
                 </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters and Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 sticky top-28">
              <div className="flex items-center gap-2 mb-6 font-bold text-lg text-neutral-900 pb-4 border-b border-neutral-100">
                <SlidersHorizontal size={20} />
                Filters
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-neutral-900 mb-3">Price Range</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 text-green-600 border-neutral-300 focus:ring-green-500" />
                    <span className="text-neutral-600 font-medium group-hover:text-green-700">Under ₹100,000</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 text-green-600 border-neutral-300 focus:ring-green-500" />
                    <span className="text-neutral-600 font-medium group-hover:text-green-700">₹100k - ₹500k</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 text-green-600 border-neutral-300 focus:ring-green-500" defaultChecked />
                    <span className="text-neutral-600 font-medium group-hover:text-green-700">₹500k - ₹1M</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 text-green-600 border-neutral-300 focus:ring-green-500" />
                    <span className="text-neutral-600 font-medium group-hover:text-green-700">Over ₹1M</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-neutral-900 mb-3">Brand</h3>
                <div className="space-y-3">
                  {['Mahindra', 'John Deere', 'Swaraj', 'Tafe'].map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 text-green-600 border-neutral-300 rounded focus:ring-green-500" />
                      <span className="text-neutral-600 font-medium group-hover:text-green-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button variant="primary" className="w-full mt-4">Apply Filters</Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <span className="text-neutral-500 font-medium font-medium">Showing <span className="text-neutral-900 font-bold">{filteredProducts.length}</span> items</span>
              <button className="flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-green-700 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-neutral-200 lg:hidden">
                <SlidersHorizontal size={16} /> Filters
              </button>
              <button className="hidden lg:flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-green-700">
                Sort by: Recommended <ChevronDown size={16} />
              </button>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-neutral-100 shadow-sm">
                <Search size={48} className="mx-auto text-neutral-300 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">No products found</h3>
                <p className="text-neutral-500">We couldn't find anything matching "{searchQuery}". Try a different search term.</p>
                <Button 
                  variant="outline" 
                  className="mt-6 font-bold"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
