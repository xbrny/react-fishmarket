import React from "react";
import PropTypes from "prop-types";
import { isObjectEmpty } from "../helpers";

import Header from "./Header";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

const Inventory = ({
  addFish,
  loadSampleFishes,
  fishes,
  updateFish,
  deleteFish
}) => (
  <div>
    <Header title="Inventory" />
    {!isObjectEmpty(fishes) &&
      Object.keys(fishes).map(key => (
        <EditFishForm
          key={key}
          id={key}
          fish={fishes[key]}
          updateFish={updateFish}
          deleteFish={deleteFish}
        />
      ))}
    <AddFishForm addFish={addFish} />
    <div className="control mt-1">
      <button
        onClick={loadSampleFishes}
        type="button"
        className="button is-light is-small"
      >
        Load sample fishes
      </button>
    </div>
  </div>
);

Inventory.propTypes = {
  fishes: PropTypes.object,
  addFish: PropTypes.func,
  deleteFish: PropTypes.func,
  updateFish: PropTypes.func,
  loadSampleFishes: PropTypes.func
};

export default Inventory;
