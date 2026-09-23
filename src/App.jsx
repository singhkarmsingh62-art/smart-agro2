
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ServicePage from "./components/Service";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Order from "./components/Order";
import Orders from "./components/Orders";
import Profile from "./components/Profile";


// Protected Cart Route
const ProtectedCart = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  return <Cart />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Products" element={<Products />} />

        <Route path="/Service" element={<ServicePage />} />

        <Route path="/Login" element={<Login />} />
<Route path="/ProductDetails" element={<ProductDetails />} />
<Route path="/Order" element={<Order />} />
<Route path="/Orders" element={<Orders />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/Cart" element={<ProtectedCart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
