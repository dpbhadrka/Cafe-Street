import React, { useState } from "react";
import "./cart.css";

export default function Cart(props) {
  const [removeItem, SetRemoveItem] = useState(false);
  return (
    <>
      <div
        style={{ display: removeItem ? "none" : "flex" }}
        className="cartItem"
      >
        <img
          width="35"
          height="35"
          src="https://img.icons8.com/1756af/glyph-neue/0/delete-sign.png"
          alt="delete"
          onClick={() => {
            props.removeItemFromCart(props.name);
          }}
        />
        <img src={props.path} alt="xyx" />
        <div>
          <p>{props.name}</p>
          <p>{props.type}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </>
  );
}
