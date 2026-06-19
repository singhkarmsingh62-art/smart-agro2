import React from 'react';
import Button from './Button';
import { ShoppingCart, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-green-700 shadow-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-neutral-900 leading-tight group-hover:text-green-600 transition-colors line-clamp-1">{product.name}</h3>
          <div className="flex items-center bg-yellow-50 px-2 py-0.5 rounded text-xs font-bold text-yellow-700 ml-2 shrink-0">
            <Star size={12} className="fill-yellow-500 text-yellow-500 mr-1" />
            {product.rating}
          </div>
        </div>
        
        <p className="text-neutral-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500 font-medium">Price</span>
            <span className="font-bold text-xl text-neutral-900">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          <Button variant="primary" className="!p-2.5 rounded-xl shadow-green-500/20 shadow-md">
            <ShoppingCart size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
