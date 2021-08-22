import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="parent">
      <div className="logo ">
        <h1>Fruity</h1>
      </div>
      <div className="head-list">
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Shop</li>
          <li>Featured</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
