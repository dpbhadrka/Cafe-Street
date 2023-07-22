import React from "react";

import Card from "../../Popular/CoffeeCard/Card";
import "./searchResult.css";

const Search = (props) => {
  return (
    <>
      {/* Display the filtered items */}
      {/* {console.log(props.searchedItem)} */}
      {console.log("in search box")}

      <div className="searchResult">
        {props.searchedItem.map((coffee, index) => (
          <Card
            key={index}
            name={coffee.name}
            price={coffee.price}
            path={coffee.path}
            takeCoffeeItem={props.takeCoffeeItem}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
