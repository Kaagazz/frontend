import React from "react";
import "./Products.css";
import Logo from "../assets/logo.png";
import Artisinal from "../assets/Artisinal.jpeg";
import Book from "../assets/book.jpeg";
// import AddToCart from "../assets/AddToCart.png";
import premium_Diary from "../assets/diary.jpeg";
import A4 from "../assets/A4.jpg";

const Shop = () => {
  const products = [
    {
      image: Artisinal,
      caption: "Artisinal Kaagazz [A2]",
      description: "Discover the perfect blend of quality and eco-consciousness with Kaagazz artisinal A2 sheets.",
    },
    {
      image: Book,
      caption: "Publishing/Book Purchase",
      description: "Publish your book with the most premium and eco-friendly paper Kaagazz.",
    },
    {
      image: premium_Diary,
      caption: "Premium Diary [A5]",
      description: "The premium diary by Kaagazz designed to offer both sophistication and functionality.",
    },
    {
      image: A4,
      caption: "Artisinal Kaagazz [A4]",
      description: "Discover the perfect blend of quality and eco-consciousness with Kaagazz artisinal A4 sheets.",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="Title">
          <img
            src={Logo}
            alt="Company Logo"
            width="300"
            height="100"
            className="logo-img"
            loading="lazy"
          />
        </div>

        <div className="grid-container">
          {products.map((product, index) => (
            <div className="grid-item" key={index}>
              <img
                className="product-image"
                src={product.image}
                alt={product.caption}
              />
              <div className="caption">{product.caption}</div>
              <div className="caption-small">{product.description}</div>
              <button className="button">
                {/* <img src={AddToCart} alt="Add to Cart" /> */}
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
