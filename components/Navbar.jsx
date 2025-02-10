import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F6F6F6] text-[#1A1A1A] py-4 px-6 shadow-md relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="../assets/logo.png" alt="Kaagazz Logo" className="h-12 cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <Link to="/" className="hover:text-gray-600 transition">Home</Link>
          <Link to="/sustainability" className="hover:text-gray-600 transition">Sustainability</Link>
          <Link to="/shop" className="hover:text-gray-600 transition">Store</Link>
          <Link to="/about" className="hover:text-gray-600 transition">Community</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden flex flex-col bg-[#F6F6F6] text-[#1A1A1A] py-4 px-6 space-y-4 absolute w-full left-0 top-full shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      >
        <Link to="/" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/sustainability" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Sustainability</Link>
        <Link to="/shop" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Store</Link>
        <Link to="/about" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Community</Link>
      </div>
    </nav>
  );
};

export default Navbar;
