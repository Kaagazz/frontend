import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react"; 

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const cartItemCount = cart ? cart.length : 0;

  useEffect(() => {
    // Check authentication from localStorage or a token
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-[#1A1A1A] py-4 px-6 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="Kaagazz Logo" className="h-12 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <Link to="/" className="hover:text-gray-600 transition">Home</Link>
          <Link to="/sustainability" className="hover:text-gray-600 transition">Sustainability</Link>
          <Link to="/shop" className="hover:text-gray-600 transition">Store</Link>
          <Link to="/cart" className="relative flex items-center gap-2">
            <ShoppingCart size={28} className="text-gray-800 hover:text-gray-600 transition" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </Link>
          {isAuthenticated && (
            <button onClick={handleLogout} className="hover:text-red-600 transition">Logout</button>
          )}
          {/* <Link to="/sign-in" className="hover:text-gray-600 transition">Login</Link>
          <Link to="/sign-up" className="hover:text-gray-600 transition">Sign Up</Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white text-[#1A1A1A] py-4 px-6 space-y-4 absolute w-full left-0 top-full shadow-lg">
          <Link to="/" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/sustainability" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Sustainability</Link>
          <Link to="/shop" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Store</Link>
          <Link to="/cart" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>
            Cart ({cartItemCount})
          </Link>
          {isAuthenticated && (
            <button onClick={handleLogout} className="hover:text-red-600 transition">Logout</button>
          )}
          {/* <Link to="/sign-in" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/sign-up" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Sign Up</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
