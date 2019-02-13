import React from "react";
import PropTypes from "prop-types";

const EditFishForm = ({ id, fish, updateFish, deleteFish }) => {
  const handleOnChange = event => {
    event.preventDefault();
    const updatedFish = {
      ...fish
    };
    updatedFish[event.target.name] = event.target.value;
    updateFish(id, updatedFish);
  };

  const onClickDelete = () => {
    deleteFish(id);
  };

  return (
    <div className="mb-2">
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input is-small"
                type="text"
                name="name"
                placeholder="Name"
                value={fish.name}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-small"
                type="text"
                name="price"
                placeholder="Price"
                value={fish.price}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <div className="select is-fullwidth is-small">
                <select
                  type="select"
                  name="status"
                  placeholder="Status"
                  value={fish.status}
                  onChange={handleOnChange}
                >
                  <option value="unavailable">Not Available</option>
                  <option value="available"> Available</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea
            className="textarea is-small"
            name="desc"
            placeholder="Desc"
            value={fish.desc}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <div className="file is-small">
                <label className="file-label">
                  <input type="file" className="file-input" name="image" />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload" />
                    </span>
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control is-pulled-right">
              <button
                type="button"
                className="button is-danger is-small"
                onClick={onClickDelete}
              >
                Delete Fish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditFishForm.propTypes = {
  id: PropTypes.string,
  fish: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string
  }),
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func
};

export default EditFishForm;
