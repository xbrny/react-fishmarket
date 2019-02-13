import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getFormattedPrice } from "../helpers";

import Header from "./Header";

const Order = ({ cart, fishes, deleteFromCart }) => {
  const transitionOptions = {
    classNames: "order",
    timeout: 250
  };
  const renderCartItem = key => {
    const fish = fishes[key];

    if (!fish || fish.status === "unavailable") {
      return (
        <CSSTransition {...transitionOptions} key={key}>
          <div className="mb-1 has-text-danger level" key={key}>
            <div className="level-left">
              <span
                className="level-item delete is-small has-background-danger"
                onClick={() => deleteFromCart(key)}
              />
              <span className="level-item">
                Sorry, {fish ? fish.name : "fish"} is not available anymore
                right now
              </span>
            </div>
          </div>
        </CSSTransition>
      );
    }

    const quantity = cart[key];
    const name = fish.name;
    const total = quantity * fish.price;

    return (
      <CSSTransition {...transitionOptions} key={key}>
        <div className="level mb-1" key={key}>
          <div className="level-left">
            <span
              className="level-item delete is-small has-background-danger"
              onClick={() => deleteFromCart(key)}
            />
            <span className="level-item mr-1 quantity-container">
              <TransitionGroup component={null}>
                <CSSTransition
                  key={quantity}
                  timeout={500}
                  classNames="quantity"
                >
                  <span>{`${quantity} `}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs
            </span>
            <span className="level-item mr-1">{name}</span>
          </div>
          <div className="level-right">
            <span className="level-item">{getFormattedPrice(total)}</span>
          </div>
        </div>
      </CSSTransition>
    );
  };

  const getCartPrice = () => {
    return Object.keys(cart).reduce((total, key) => {
      if (!fishes[key]) return null;
      const quantity = cart[key];
      const price = fishes[key].price;
      const isAvailable = fishes[key].status === "available";
      if (!isAvailable) {
        return total;
      }
      return total + quantity * price;
    }, 0);
  };

  const isCartEmpty = Object.keys(cart).length === 0;
  const isFishesEmpty = Object.keys(fishes).length === 0;

  return (
    <div>
      <Header title="Order" />
      <ul>
        <li className="is-size-7">
          {!isCartEmpty && !isFishesEmpty && (
            <TransitionGroup component="div" className="cart">
              {Object.keys(cart).map(renderCartItem)}
            </TransitionGroup>
          )}
          {(isCartEmpty || isFishesEmpty) && (
            <CSSTransition
              classNames="fade"
              in={true}
              appear={true}
              timeout={1000}
            >
              <span>You cart is empty</span>
            </CSSTransition>
          )}
        </li>
      </ul>
      <hr />
      {Object.keys(cart).length !== 0 && (
        <h3 className="has-text-weight-semibold is-size-6 is-pulled-right">
          {getFormattedPrice(getCartPrice())}
        </h3>
      )}
    </div>
  );
};

Order.propTypes = {
  cart: PropTypes.object,
  fishes: PropTypes.object,
  deleteFromCart: PropTypes.func,
}

export default Order;
