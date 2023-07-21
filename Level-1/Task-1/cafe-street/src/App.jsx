import React, { useState } from "react";
import Header from "./component/Header/Header";
import Information from "./component/Information/Information";
import Popular from "./component/Popular/Popular";
import Delivery from "./component/Delivery/Delivery";
import AboutUs from "./component/AboutUs/AboutUs";
import CoffeeMenu from "./component/CoffeeMenu/CoffeeMenu";
import Footer from "./component/Footer/Footer";
import SearchResult from "./component/Header/Search/SearchResult";

function App() {
  const [searchedItem, setSearchedItem] = useState([]);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  const searchMedium = (filteredItems, searchQuery) => {
    console.log("Working");
    console.log(filteredItems);
    setSearchedItem(filteredItems);
    setSearch(searchQuery);
  };

  const takeCoffeeItem = (name, price, path, type) => {
    console.log("coffeeitem success");
    const newItem = {
      coffeeName: name,
      coffeePrice: price,
      coffeeImagePath: path,
      coffeeType: type,
    };
    setItems([...items, newItem]);
  };

  const removeItemFromCart = (name) => {
    // Create a new array without the clicked element using Array.filter()
    // const updatedData = items.filter((item) => item.name !== name);
    const updatedData = items.filter((item) => item.coffeeName != name);
    // Update the state with the new array
    console.log(name);
    setItems(updatedData);
    console.log(updatedData);
    // console.log("updatedData");
  };

  return (
    <>
      <div>
        <Header
          searchMedium={searchMedium}
          items={items}
          removeItem={removeItemFromCart}
        />
        {searchedItem.length != 0 ? (
          <SearchResult searchedItem={searchedItem} />
        ) : (
          ""
        )}

        <Information />
        <Popular takeCoffeeItem={takeCoffeeItem} />
        <Delivery />
        <CoffeeMenu />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
