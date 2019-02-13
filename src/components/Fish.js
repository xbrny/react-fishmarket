import React from "react";
import { getFormattedPrice } from "../helpers";

const Fish = ({ fish, addToCart, id }) => {
  const { name, price, status, desc, image } = fish;
  const isAvailable = status === "available";

  const handleAddtoCart = () => {
    addToCart(id);
  };

  return (
    <div className="mb-1">
      <img src={image} alt="fish" />
      <h3 className="is-size-4 has-text-weight-semi-bold has-text-danger">
        {name}
      </h3>
      <span className="has-text-weight-semibold is-size-5">
        {getFormattedPrice(price)}
      </span>
      <span> | {status}</span>
      <p className="mb-1">{desc}</p>
      <button
        onClick={handleAddtoCart}
        className="button is-dark"
        disabled={!isAvailable}
      >
        {isAvailable ? "Add to cart" : "Sold out"}
      </button>
      <hr />
    </div>
  );
};
export default Fish;
