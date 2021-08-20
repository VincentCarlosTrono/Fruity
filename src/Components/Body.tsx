import React from "react";
import "./Body.css";
import banner from "../Media/banner.png";

export const Body = () => {
  return (
    <div className="main">
      <div className="body-text">
        <h1 className="titles">Fresh Juice</h1>
        <p className="paragraph">
          We Beleive That Healthy Eating, Clean Air And, Gental Char Best Start
          To Genuine Wellbeing
        </p>
        <button className="button">Shop Now</button>
      </div>
      <div className="p">
        <img src={banner} />
      </div>
    </div>
  );
};

export default Body;
