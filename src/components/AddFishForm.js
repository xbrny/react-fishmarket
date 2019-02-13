import React, { Component } from "react";
import PropTypes from 'prop-types'

class AddFishForm extends Component {
  static propTypes = {
    addFish: PropTypes.func
  }

  name = React.createRef();
  price = React.createRef();
  status = React.createRef();
  desc = React.createRef();
  image = React.createRef();

  handleOnSubmit = event => {
    event.preventDefault();
    const fish = {
      name: this.name.current.value,
      price: this.price.current.value,
      status: this.status.current.value,
      desc: this.desc.current.value,
      // image: this.image.current.value
    };
    this.props.addFish(fish);
    event.target.reset();
  };

  render() {
    return (
      <form className="mb-2" onSubmit={this.handleOnSubmit}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={this.name}
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
                  ref={this.price}
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
                    ref={this.status}
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
              ref={this.desc}
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
                <button type="submit" className="button is-dark is-small">
                  Add Fish
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddFishForm;
