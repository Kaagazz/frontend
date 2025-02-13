import React from "react";
import { Link } from "react-router-dom";
import EmptyCartImage from "/images/diary.jpeg"; 
import CustomButton from "../components/Button"; 

const Cart = ({ cart, removeFromCart, addToCart }) => {  // Accept addToCart as a prop
  // Calculate total price based on quantity
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
          <img 
            src={EmptyCartImage} 
            alt="Empty Cart" 
            className="w-80 h-auto mx-auto mt-4 rounded-lg"
          />
          <p className="text-gray-700 text-md my-4">Start shopping to add items to your cart!</p>
          <Link to="/shop">
            <CustomButton text="Start Shopping" />
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-gray-100 p-6 rounded-lg shadow-md">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.caption} className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <p className="text-lg font-medium">{item.caption}</p>
                  <p className="text-gray-600">₹{item.price} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item)}
                  className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}  
                  className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold">Total: ₹{totalPrice.toFixed(2)}</p>
            <Link to="/checkout">
              <CustomButton text="Proceed to Checkout" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
