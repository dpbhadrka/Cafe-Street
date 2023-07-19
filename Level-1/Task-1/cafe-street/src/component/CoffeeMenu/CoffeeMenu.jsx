import React, { useState } from "react";
import Card from "../Popular/CoffeeCard/Card";
import Menu from "../../assets/Data/Menu";
import "./coffeeMenu.css";

export default function CoffeeMenu() {
  const [isMenuActive, setMenu] = useState(false);

  return (
    <>
      <div className="coffeeMenu">
        <div className="identity">
          Special <u>Menu</u>
        </div>

        <div className="menuButton">
          <button
            onClick={() => {
              isMenuActive === false ? setMenu(true) : setMenu(false);
            }}
          >
            See Menu
          </button>
        </div>
        <div className={isMenuActive === false ? "coffeeMenuItem" : ""}>
          {Menu.map((coffee, index) => (
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
