import React from "react";
import Header from "./component/Header/header";
import Information from "./component/Information/Information";
import Popular from "./component/Popular/Popular";
import Delivery from "./component/Delivery/Delivery";
import AboutUs from "./component/AboutUs/AboutUs";
import CoffeeMenu from "./component/CoffeeMenu/CoffeeMenu";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
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
