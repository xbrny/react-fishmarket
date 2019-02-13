import React from "react";
import Fish from "./Fish";
import PropTypes from 'prop-types'

const Menu = ({ fishes, addToCart }) => (
  <div>
    <ul>
      {Object.keys(fishes).map(key => (
        <li key={key}>
          <Fish fish={fishes[key]} addToCart={addToCart} id={key}/>
        </li>
      ))}
    </ul>
  </div>
);

Menu.propTypes = {
  fishes: PropTypes.object,
  addToCart: PropTypes.func,
}
export default Menu;
