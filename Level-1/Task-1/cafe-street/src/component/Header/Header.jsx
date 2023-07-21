import React, { useState } from "react";
import "./header.css";
import Menu from "../../assets/Data/Menu";
import Cart from "../Cart1/Cart";

export default function Header(props) {
  const [activeClass, setActiveClass] = useState("home");
  const [menu, setMenu] = useState("flase");
  const [isCartVisible, setCartVisibility] = useState(false);

  // Search Functionality
  const [searchQuery, setSearchQuery] = useState("");

  const [list, setList] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (searchQuery.trim() != "") {
      // Filter the items based on the search query
      const filteredResults = Menu.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      // Set the filtered items in the state
      // setFilteredItems(filteredResults);
      // searchMedium is in app.jsx
      props.searchMedium(filteredResults, searchQuery);
    }
  };

  return (
    <>
      <header>
        {/* {console.log(props.items)} */}
        {/* {console.log(list)} */}
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
              <li>
                <a
                  className={activeClass === "home" ? "active" : ""}
                  onClick={() => {
                    setActiveClass("home");
                    setMenu("false");
                  }}
                  href="#information"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={activeClass === "ourproduct" ? "active" : ""}
                  onClick={() => {
                    setActiveClass("ourproduct");
                    setMenu("false");
                  }}
                  href="#coffeeMenu"
                >
                  Our Product
                </a>
              </li>

              <li>
                <a
                  className={activeClass === "delivery" ? "active" : ""}
                  onClick={() => {
                    setActiveClass("delivery");
                    setMenu("false");
                  }}
                  href="#delivery"
                >
                  Delivery
                </a>
              </li>

              <li
                className={activeClass === "cart" ? "active" : ""}
                onClick={() => {
                  setActiveClass("cart");
                  setMenu("false");
                  isCartVisible === false
                    ? setCartVisibility(true)
                    : setCartVisibility(false);
                }}
                style={{ display: menu === "true" ? "block" : "none" }}
              >
                Cart
              </li>

              <li>
                <a
                  className={activeClass === "aboutus" ? "active" : ""}
                  onClick={() => {
                    setActiveClass("aboutus");
                    setMenu("false");
                  }}
                  href="#aboutUs"
                >
                  {" "}
                  About us
                </a>
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
                onClick={handleSearch}
              />
              <input
                type="search"
                id="header-search"
                placeholder="Cappuccino"
                onChange={(e) => {
                  console.log(e.target.value);
                  handleSearch(e.target.value);
                }}
              />

              {/* <Search /> */}
            </div>
            <div
              className="cart"
              onClick={() => {
                isCartVisible === false
                  ? setCartVisibility(true)
                  : setCartVisibility(false);
              }}
            >
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
              src="https://img.icons8.com/color/48/menu--v1.png"
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
      {isCartVisible ? (
        <div className="cartMenu">
          <div
            className="closeCart"
            onClick={() => {
              setCartVisibility(false);
              setActiveClass("home");
            }}
          >
            <p>
              Your <u>Cart</u>
            </p>
            <button>
              {activeClass === "cart" ? (
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/glyph-neue/64/delete-sign.png"
                  alt="delete-sign"
                />
              ) : (
                "Close"
              )}
            </button>
          </div>
          {props.items.length != 0 ? (
            <div className="cartItemList">
              {props.items.map((item, index) => {
                return (
                  <Cart
                    key={index}
                    name={item.coffeeName}
                    price={item.coffeePrice}
                    path={item.coffeeImagePath}
                    type={item.coffeeType}
                    removeItemFromCart={props.removeItem}
                  />
                );
              })}
            </div>
          ) : (
            <div className="emptyCart">Cart is Empty.</div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
