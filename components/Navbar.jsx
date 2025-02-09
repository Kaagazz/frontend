import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-[#D9D9D9] text-black p-4 h-33 flex justify-around items-center">
      <div>
        <h1 className="font-bold cursor-pointer">KAAGAZZ LOGO</h1>
      </div>
      <div className="flex justify-around gap-20">
        <Link to="/" className="cursor-pointer">Home</Link>
        <Link to="/sustainability" className="cursor-pointer">Sustainability</Link>
        <Link to="/shop" className="cursor-pointer">Shop</Link>
        <Link to= "/about" className="cursor-pointer">About</Link>
        {/* <Link to= "/signin" className="cursor-pointer">Signin</Link>
        <Link to= "/signup" className="cursor-pointer">Signup</Link>  */}
      </div>
    </div>
  );
};

export default Navbar;
