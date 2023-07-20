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

  const searchMedium = (filteredItems, searchQuery) => {
    console.log("Working");
    console.log(filteredItems);
    setSearchedItem(filteredItems);
    setSearch(searchQuery);
  };
  return (
    <>
      <div>
        <Header searchMedium={searchMedium} />
        {searchedItem.length != 0 ? (
          <SearchResult searchedItem={searchedItem} />
        ) : (
          ""
        )}
        <Information />
        <Popular />
        <Delivery />
        <CoffeeMenu />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
