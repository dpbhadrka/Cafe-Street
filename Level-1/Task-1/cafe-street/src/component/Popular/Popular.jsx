import React from "react";
import Card from "./CoffeeCard/Card";
// import cap from "./cappuccino.jpg";
import "./popular.css";

import CoffeeList from "../../assets/Data/CoffeeData";

export default function Popular() {
  return (
    <>
      <div className="popularNow">
        <div>
          Popular <u>Now</u>
        </div>

        <div className="popularCoffee">
          {CoffeeList.map((coffee, index) => (
            <Card
              key={index}
              name={coffee.name}
              price={coffee.price}
              path={coffee.path}
            />
          ))}
        </div>
      </div>
    </>
  );
}
