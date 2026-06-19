import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Products", path: "/Products" },
    { name: "Service 📞", path: "/Service" },
    { name: "Login", path: "/Login" },
  ];

  return (
    <div className="fixed top-0 z-50 w-full bg-orange-200 shadow-md px-3 md:px-8 py-2">
      
      <div className="flex flex-wrap items-center justify-between gap-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.TA_jI4GgM1D3NtN7K0l-IAHaHa?pid=Api&P=0&h=180"
            alt="logo"
            className="h-10 w-10 rounded-full object-contain"
          />

          <h1 className="text-lg md:text-2xl font-bold tracking-wide text-gray-800">
            Smart-Agro
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-2 md:gap-5 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`px-3 py-1 rounded-lg text-sm md:text-base transition ${
                  location.pathname === item.path
                    ? "bg-white text-orange-500 shadow-sm font-bold"
                    : "hover:bg-white/40 text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Navbar;