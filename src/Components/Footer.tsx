import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="Design">
      <h1>Subscribe for more videos</h1>
      <div className="border">
        <p>
          If you like this website make sure to leave a like,
          <br /> comment and Subscribe
        </p>
        <div className="box">
          <input type="text" placeholder="v.trono@gmail.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
