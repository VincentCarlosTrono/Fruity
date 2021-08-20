import React from "react";
import "./NewProducts.css";
import mango from "../Media/mango.png";
import strawberry from "../Media/strawberry.png";
import grape from "../Media/grape.png";
import mango2 from "../Media/mango2.png";

const fruits = [
  {
    product: "Mango",
    price: "$2.60",
    image: mango,
  },
  {
    product: "Grapes",
    price: "$2.00",
    image: grape,
  },
  {
    product: "Sweet Mango",
    price: "$3.92",
    image: mango2,
  },
  {
    product: "Strawberry",
    price: "$1.25",
    image: strawberry,
  },
];

export const NewProducts = () => {
  return (
    <div className="head">
      <h2 className="title">New Products</h2>
      <div className="objects">
        {fruits.map(({ image, product, price }) => (
          <div className="card">
            <img src={image} />
            <h1>{product}</h1>
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewProducts;
