import React, { useState } from 'react';
import Artisinal from "../assets/Artisinal.jpeg"
import Book from "../assets/book.jpeg"
import Diary from "../assets/diary.jpeg"
import A4 from "../assets/A4.jpg"
const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const mainImages = [
    Artisinal,
    Book, Diary
  ];
  
  return (
    <div className="product-page">
      <header>
        <div className="header-content">
          <div className="logo">Kaagazz Logo</div>
          <nav>
            <a href="/">home</a>
            <a href="/sustainability">sustainability</a>
            <a href="/shop">shop</a>
          </nav>
        </div>
      </header>

      <div className="product-container">
        <div className="product-gallery">
          <div className="thumbnail-list">
            {mainImages.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
                style={{
                  background: `url(${img}) center/cover no-repeat`
                }}
              />
            ))}
          </div>
          <div 
            className="main-image"
            style={{
              background: `url(${mainImages[selectedImage]}) center/cover no-repeat`
            }}
          />
        </div>

        <div className="product-info">
          <h1 className="product-title">Artisinal Kaagazz [A2]</h1>
          <div className="description">
            <p>Thoughtfully Designed With Sustainability In Mind, These Sheets Are Crafted From Premium Materials Like Other Waste Products, Offering An Excellent Choice For Your Usage. 100 GSM Weight, Ensuring Durability And Results For Various Applications.</p>
          </div>
          
          <div className="price">₹1000/- for 50 sheets</div>

          <div className="actions">
            <button className="primary-button buy">
              BUY NOW
            </button>
            <button className="primary-button cart">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="products-grid">
          {[
            {
              id: 1,
              image: Artisinal,
              title: "Publishing/Book Purchase",
              price: 1500
            },
            {
              id: 2,
              image: Book,
              title: "Premium Diary [A5]",
              price: 750
            },
            {
              id: 3,
              image: A4,
              title: "Artisinal Kaagazz [A4]",
              price: 800
            }
          ].map(product => (
            <div key={product.id} className="product-card">
              <div 
                className="product-image"
                style={{
                  background: `url(${product.image}) center/cover no-repeat`
                }}
              />
              <h3>{product.title}</h3>
              <p className="price">₹{product.price}/-</p>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <p className="copyright">Copyright © 2024 KAAGAZZ - All Rights Reserved</p>
          <p className="brand-text">PEELTO KAAGAZZ<br/>ORGANIC PAPER</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;