import React from 'react';
import * as Icons from 'lucide-react';

export default function CategoryCard({ category }) {
  // Use dynamic icon from lucide-react if it exists, otherwise fallback to Tractor
  const IconComponent = Icons[category.icon] || Icons.Tractor;

  return (
    <div className="group cursor-pointer bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-neutral-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1 text-center">
      <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <span className="font-semibold text-neutral-800 tracking-wide group-hover:text-green-700 transition-colors">{category.name}</span>
    </div>
  );
}
