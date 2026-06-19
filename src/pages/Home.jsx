import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/dummyData';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-50 overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c6cbf?auto=format&fit=crop&q=80&w=2000" 
            alt="Farming concept" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
       
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold text-sm mb-6">
          <Leaf size={19} />
          Empowering Modern Farmers
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-6">
          Your One-Stop Shop for <span className="text-green-600">Smart Farming</span>
        </h1>

        <p className="text-lg text-neutral-600 mb-8">
          Buy premium agricultural equipment or request expert repair services.
        </p>
      </div>

      {/* RIGHT VIDEO */}
      <div className="w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/farming.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  </div>

        
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Shop by Category</h2>
              <p className="text-neutral-500">Find exactly what you need for your farm</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-neutral-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Featured Products</h2>
              <p className="text-neutral-500">Highest rated machinery by fellow farmers</p>
            </div>
            <Link to="/marketplace" className="hidden sm:flex items-center gap-1 text-green-600 font-bold hover:text-green-700 group transition-colors">
              View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link to="/marketplace">
              <Button variant="outline" className="w-full">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
