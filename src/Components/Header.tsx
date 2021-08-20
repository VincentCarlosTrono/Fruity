import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="parent">
      <div className="logo">
        <h1>Fruity</h1>
      </div>
      <div className="head-list">
        <ul>
          <li className="A">Home</li>
          <li className="B">New</li>
          <li className="C">Shop</li>
          <li className="D">Featured</li>
          <li className="E">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
