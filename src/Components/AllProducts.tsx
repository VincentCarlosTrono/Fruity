import React from "react";
import "./AllProducts.css";
import Product1 from "../Media/product10.png";
import Product2 from "../Media/product11.png";
import Product3 from "../Media/product3.png";
import Product4 from "../Media/product4.png";
import Product5 from "../Media/product5.png";
import Product6 from "../Media/product6.png";
import Product7 from "../Media/product7.png";
import Product8 from "../Media/product8.png";

const Products = [
  {
    name: "Apple",
    price: "$2.23",
    image: Product1,
  },
  {
    name: "Apple",
    price: "$2.23",
    image: Product2,
  },
  {
    name: "Apple",
    price: "$2.23",
    image: Product3,
  },
  {
    name: "Apple",
    price: "$2.23",
    image: Product4,
  },
];

const Products2 = [
  {
    name: "Apple",
    price: "$2.23",
    image: Product5,
  },
  {
    name: "Apple",
    price: "$2.23",
    image: Product6,
  },
  {
    name: "Apple",
    price: "$2.23",
    image: Product7,
  },
  {
    name: "Apple",
    price: "$2.23",
    image: Product8,
  },
];

export const AllProducts = () => {
  return (
    <div className="top">
      <h2 className="product">All Products</h2>
      <div className="parents">
        {Products.map((product) => (
          <div className="kwekkwek">
            <img src={product.image} />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div className="parents">
        {Products2.map((product) => (
          <div className="kwekkwek">
            <img src={product.image} />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllProducts;
