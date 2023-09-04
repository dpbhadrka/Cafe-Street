import React, { useState } from "react";
import "./card.css";

export default function Card(props) {
  const [isActive, setActive] = useState("Hot");

  const addToCart = () => {
    console.log(props.name);
    console.log(props.price);
    alert("Your " + props.name + " is added to cart.");

    props.takeCoffeeItem(props.name, props.price, props.path, isActive);
  };
  return (
    <>
      {/* {console.log("this is card")} */}
      <div className="card">
        <div className="card-container">
          <div className="cardImage">
            <img src={props.path} alt="lll" />
          </div>
          <div className="coffeeInfo">
            <p>{props.name}</p>
            <p>{props.price}k</p>
          </div>
          <div className="coffeeOption">
            <div className="coffeeType">
              <button
                className={isActive === "Hot" ? "active" : ""}
                onClick={() => setActive("Hot")}
              >
                Hot
              </button>
              <button
                className={isActive === "Cold" ? "active" : ""}
                onClick={() => {
                  setActive("Cold");
                }}
              >
                Cold
              </button>
            </div>

            <img
              width="35"
              height="35"
              src="https://img.icons8.com/external-obivous-color-kerismaker/48/external-cart-ecommerce-color-obivous-color-kerismaker.png"
              alt="cart"
              onClick={addToCart}
            />
          </div>
        </div>
      </div>
    </>
  );
}
