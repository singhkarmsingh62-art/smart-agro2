import React from 'react';

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyle = "inline-flex items-center justify-center px-4 py-2.5 font-semibold rounded-xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 focus:ring-green-500",
    secondary: "bg-green-50 text-green-700 hover:bg-green-100 focus:ring-green-500",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500",
    ghost: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
