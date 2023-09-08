import React from "react";
import Card from "./CoffeeCard/Card";
// import cap from "./cappuccino.jpg";
import "./popular.css";
import CoffeeList from "../../../assets/Data/CoffeeData";
export default function Popular(props) {
  return (
    <>
      <div className="popularNow">
        <div>
          Popular <u>Now</u>
        </div>

        <div className="popularCoffee">
          {CoffeeList.map((coffee, index) => (
            <Card
              takeCoffeeItem={props.takeCoffeeItem}
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
