import React from "react";
import Header from "./component/Header/header";
import Information from "./component/Information/Information";
import Popular from "./component/Popular/Popular";
import Delivery from "./component/Delivery/Delivery";
import AboutUs from "./component/AboutUs/AboutUs";

function App() {
  return (
    <>
      <div>
        <Header />
        <Information />
        <Popular />
        <Delivery />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
