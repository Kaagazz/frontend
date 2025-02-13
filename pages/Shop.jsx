import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import Artisinal from "/images/Artisinal.jpeg";
import Book from "/images/book.jpeg";
import premium_Diary from "/images/diary.jpeg";
import A4 from "/images/A4.jpg";

const Shop = ({ addToCart }) => {
  const [popup, setPopup] = useState(null);

  const products = [
    { id: 1, image: Artisinal, caption: "Artisinal Kaagazz [A2]", description: "Discover the perfect blend of quality and eco-consciousness with Kaagazz artisinal A2 sheets.", price: 1000, isService: false },
    { id: 2, image: Book, caption: "Publishing/Book Purchase", description: "Publish your book with the most premium and eco-friendly paper Kaagazz.", isService: true },
    { id: 3, image: premium_Diary, caption: "Premium Diary [A5]", description: "The premium diary by Kaagazz designed to offer both sophistication and functionality.", price: 1500, isService: false },
    { id: 4, image: A4, caption: "Artisinal Kaagazz [A4]", description: "Discover the perfect blend of quality and eco-consciousness with Kaagazz artisinal A4 sheets.", price: 1000, isService: false },
  ];

  const handleAddToCart = (product) => {
    if (!product.isService) {
      addToCart(product);
      setPopup(`${product.caption} added to cart!`);

      // Hide popup after 2.5 seconds
      setTimeout(() => {
        setPopup(null);
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 mt-20">
      <div className="mb-8 flex justify-center w-full px-10">
        <img src={Logo} alt="Company Logo" className="w-72 h-auto" loading="lazy" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <img className="w-48 h-64 object-cover aspect-[4/3] rounded-md" src={product.image} alt={product.caption} />
            <div className="text-gray-700 text-lg font-light mt-4 text-center">{product.caption}</div>
            <div className="text-gray-500 text-sm mt-2 text-center">{product.description}</div>

            {/* Show price only for products */}
            {!product.isService && (
              <p className="text-gray-800 text-md font-semibold mt-2">₹{product.price}</p>
            )}

            {/* Change button based on service/product */}
            {product.isService ? (
              <Link to="/contact" className="mt-4 px-6 py-2 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 transition text-center">
                Contact Us
              </Link>
            ) : (
              <button 
                className="mt-4 px-6 py-2 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 transition"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Popup Notification */}
      {popup && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg transition-opacity animate-fade-in-out">
          {popup}
        </div>
      )}
    </div>
  );
};

export default Shop;
