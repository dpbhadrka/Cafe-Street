import React from "react";
import PathImage1 from "./cup.webp";
import PathImage2 from "./car.png";
import "./delivery.css";

export default function Delivery() {
  return (
    <>
      <div className="delivery" id="delivery">
        <div>
          <p>
            How to use delivery <u>service</u>
          </p>
        </div>
        <div className="useDelivery">
          <div>
            <div>
              <img src={PathImage1} alt="cup" />
            </div>
            <div>
              <p>choose your coffee</p>
              <p>20+ coffee for you</p>
            </div>
          </div>
          <div>
            <div>
              <img src={PathImage2} alt="cup" />
            </div>
            <div>
              <p>we delivery it to you</p>
              <p>choose delivery service</p>
            </div>
          </div>

          <div>
            <div>
              <img src={PathImage1} alt="cup" />
            </div>
            <div>
              <p>Enjoy your coffee</p>
              <p>Have a good day</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
