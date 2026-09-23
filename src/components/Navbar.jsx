
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Products", path: "/Products" },
    { name: "Service 📞", path: "/Service" },
  ];

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Cart
  const handleCartClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login");
    } else {
      navigate("/Cart");
    }

    closeMenu();
  };

  // Profile
  const handleProfileClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login");
    } else {
      navigate("/Profile");
    }

    closeMenu();
  };

  // Orders
  const handleOrdersClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login");
    } else {
      navigate("/Orders");
    }

    closeMenu();
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    closeMenu();
    navigate("/Login");
  };

  // Active link style
  const getLinkClass = (path) => {
    return `block px-3 py-2 rounded-lg text-sm md:text-base transition ${
      location.pathname === path
        ? "bg-white text-orange-500 shadow-sm font-bold"
        : "text-gray-700 hover:bg-white/50"
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-orange-200 shadow-md">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.TA_jI4GgM1D3NtN7K0l-IAHaHa?pid=Api&P=0&h=180"
              alt="Smart Agro Logo"
              className="h-10 w-10 rounded-full object-contain"
            />

            <h1 className="text-lg font-bold tracking-wide text-gray-800 sm:text-xl md:text-2xl">
              Smart-Agro
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-2 md:flex lg:gap-4">
            {/* Main Navigation */}
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={getLinkClass(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Cart */}
            <li>
              <button
                onClick={handleCartClick}
                className={getLinkClass("/Cart")}
              >
                Cart 🛒
              </button>
            </li>

            {/* Profile */}
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleProfileClick}
                  className={getLinkClass("/Profile")}
                >
                  Profile 👤
                </button>
              </li>
            )}

            {/* Orders */}
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleOrdersClick}
                  className={getLinkClass("/Orders")}
                >
                  My Orders 📦
                </button>
              </li>
            )}

            {/* Login / Logout */}
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-white/50 md:text-base"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/Login"
                  className={getLinkClass("/Login")}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-2xl text-gray-800 hover:bg-white/50 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-orange-300 py-3 md:hidden">
            <ul className="flex flex-col gap-1">

              {/* Main Navigation */}
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={getLinkClass(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Cart */}
              <li>
                <button
                  onClick={handleCartClick}
                  className={`w-full text-left ${getLinkClass("/Cart")}`}
                >
                  Cart 🛒
                </button>
              </li>

              {/* Profile */}
              {isLoggedIn && (
                <li>
                  <button
                    onClick={handleProfileClick}
                    className={`w-full text-left ${getLinkClass("/Profile")}`}
                  >
                    Profile 👤
                  </button>
                </li>
              )}

              {/* Orders */}
              {isLoggedIn && (
                <li>
                  <button
                    onClick={handleOrdersClick}
                    className={`w-full text-left ${getLinkClass("/Orders")}`}
                  >
                    My Orders 📦
                  </button>
                </li>
              )}

              {/* Login / Logout */}
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-lg px-3 py-2 text-left font-semibold text-red-600 transition hover:bg-white/50"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/Login"
                    onClick={closeMenu}
                    className={getLinkClass("/Login")}
                  >
                    Login
                  </Link>
                )}
              </li>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

