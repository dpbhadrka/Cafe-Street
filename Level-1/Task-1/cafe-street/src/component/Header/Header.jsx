import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [activeClass, setActiveClass] = useState("aboutus");
  const [menu, setMenu] = useState("flase");
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logoTitle">
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/bubbles/100/cafe.png"
              alt="cafe"
            />
            <span className="webName">
              <strong>
                <i>cafe</i>
              </strong>
              <span> street</span>
            </span>
          </div>

          <div className={menu === "true" ? "mobile-header" : "header-navbar"}>
            <ul>
              <li
                className={activeClass === "ourproduct" ? "active" : ""}
                onClick={() => {
                  setActiveClass("ourproduct");
                  setMenu("false");
                }}
              >
                Our Product
              </li>

              <li
                className={activeClass === "delivery" ? "active" : ""}
                onClick={() => {
                  setActiveClass("delivery");
                  setMenu("false");
                }}
              >
                Delivery
              </li>

              <li
                className={activeClass === "cart" ? "active" : ""}
                onClick={() => {
                  setActiveClass("cart");
                  setMenu("false");
                }}
                style={{ display: menu === "true" ? "block" : "none" }}
              >
                Cart
              </li>

              <li
                className={activeClass === "aboutus" ? "active" : ""}
                onClick={() => {
                  setActiveClass("aboutus");
                  setMenu("false");
                }}
              >
                About us
              </li>
            </ul>
          </div>

          <div className="search-cart-container">
            <div className="header-search">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/search--v1.png"
                alt="search--v1"
              />
              <input
                type="search"
                id="header-search"
                placeholder="Cappuccino"
              />
            </div>
            <div className="cart">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/external-obivous-color-kerismaker/48/external-cart-ecommerce-color-obivous-color-kerismaker.png"
                alt="cart"
              />
            </div>
          </div>
          <div className="header-menubutton">
            <img
              style={{ display: menu === "true" ? "none" : "block" }}
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/menu-rounded.png"
              alt="menu-rounded"
              onClick={() => {
                menu === "true" ? setMenu("false") : setMenu("true");
              }}
            />

            <img
              style={{ display: menu === "true" ? "block" : "none" }}
              width="35"
              height="35"
              src="https://img.icons8.com/glyph-neue/64/delete-sign.png"
              alt="delete-sign"
              onClick={() => {
                menu === "true" ? setMenu("false") : setMenu("true");
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
