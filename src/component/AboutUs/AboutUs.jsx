import React from "react";
import AboutImg from "./About-coffee-2.png";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="aboutUs" id="aboutUs">
        <div>
          <img width="280" src={AboutImg} alt="" />
        </div>
        <div className="aboutInfo">
          <p>
            About <u>Us</u>
          </p>
          <p>We provide quality coffee, and ready to deliver.</p>
          <p>
            We are a company that makes and distributes delicious drinks. Our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
        </div>
      </div>
    </>
  );
}
