import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function BookCards() {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
  
    return (
        <>
      <div id="make-3D-space">
        <div
          id="product-card"
          className={hovered ? "animate" : ""}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <div id="product-front">
            <div class="shadow" />
            <img
              src="https://cdn.shopify.com/s/files/1/0424/3147/9967/products/Image_2021_530x@2x.jpg?v=1617446196"
              alt=""
              width={330}
            />
            <div class="image_overlay" />
            <div id="view_details">View details</div>
            <div class="stats">
              <div class="stats-container">
                <span class="product_price"> &#8377; 1,497</span>
                <span class="product_name">Study of Literature</span>
                <p>Paperback – Unabridged,</p>
  
                <div class="product-options">
                  <strong>Author</strong>
                  <span> William Henry Hudson</span>
                  {/* <strong>COLORS</strong> */}
                  <div class="colors">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd card.................. */}
      
      </>
    );
  }
  
  
