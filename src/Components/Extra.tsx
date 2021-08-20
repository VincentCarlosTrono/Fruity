import React from "react";
import "./Extra.css";
import cat1 from "../Media/cat1.png";

export const Extra = () => {
  return (
    <div className="Fruit">
      <div className="category">
        <div className="shop">
          <h1 className="Fresh">Daily Fresh Fresh Fruits</h1>
          <button className="buy">Shop now</button>
        </div>
        <div>
          <img src={cat1} />
        </div>
      </div>
      <div className="category">
        <div className="shop">
          <h1 className="Fresh">Daily Fresh Fresh Fruits</h1>
          <button className="buy">Shop now</button>
        </div>
        <div>
          <img src={cat1} />
        </div>
      </div>
    </div>
  );
};

export default Extra;
