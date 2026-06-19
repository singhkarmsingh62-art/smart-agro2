import React from 'react';

export default function InputField({ label, id, error, textarea = false, ...props }) {
  const inputClasses = `w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 shadow-sm ${
    error ? "border-red-400 focus:ring-red-200" : "border-neutral-200 focus:border-green-500 focus:ring-green-200/50 hover:border-neutral-300"
  }`;

  return (
    <div className="flex flex-col space-y-1.5 mb-5 block">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-neutral-700 ml-1">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea id={id} className={inputClasses} {...props} />
      ) : (
        <input id={id} className={inputClasses} {...props} />
      )}
      {error && <span className="text-xs font-medium text-red-500 ml-1">{error}</span>}
    </div>
  );
}
