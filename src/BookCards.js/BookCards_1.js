import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function BookCards_1() {
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
              src="https://www.perlego.com/books/RM_Books/packt_pub_vpnckweg/9781787281523.jpg"
              alt=""
              width={330}
            />
            <div class="image_overlay" />
            <div id="view_details">View details</div>
            <div class="stats">
              <div class="stats-container">
                <span class="product_price"> &#8377; 980 </span>
                <span class="product_name">Angular</span>
                <p>Ajitesh Shukla</p>
  
                <div class="product-options">
                  <strong>Author</strong>
                  <span>Ajitesh Shukla </span>
                  <span>Building Web Apps with Spring 5 and Angular</span>
                  {/* <strong>COLORS</strong> */}
                  <div class="colors">
                    <div class="c-blue">
                      <span />
                    </div>
                    <div class="c-red">
                      <span />
                    </div>
                    <div class="c-white">
                      <span />
                    </div>
                    <div class="c-green">
                      <span />
                    </div>
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
  
  
