import React from "react";
import "./information.css";
import Cappuccino from "./Cappuccino.png";
import Star from "@mui/icons-material/StarOutlined";

export default function Information() {
  return (
    <>
      <div className="information">
        <div className="tagLine">
          <p>
            Enjoy your <i>coffee</i> before your activity
          </p>
          <p>
            Boost your productivity and build your mood with a glass of coffee
            in the morning.
          </p>

          <button className="ordernow">Order now</button>
        </div>
        <div className="coffeeImage">
          <img id="cuppuccino" height="400" src={Cappuccino} />

          <p>
            4.8
            <img src="https://img.icons8.com/fluency/48/star.png" alt="star" />
          </p>
          <p>Cappuccino</p>
          <p>10K</p>
        </div>
      </div>
    </>
  );
}
