import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Cart from "../pages/Cart";
import Footer from "../components/Footer";
import Sustainability from "../pages/Sustainability";
import OtpStatus from "../pages/OtpStatus";
import OtpVerification from "../pages/OtpVerification";


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/sign-up" || location.pathname === "/sign-in";

  // Cart State
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart
  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <>
      {!hideNavbar && <Navbar cart={cart} />} {/* ✅ Pass cart to update count */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} cart={cart} />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/Otp-Status" element={<OtpStatus />} />
        
      </Routes>

      {!hideNavbar && <Footer />}
    </>
  );
}

export default App;
