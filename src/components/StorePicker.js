import React, { Component } from "react";

class StorePicker extends Component {
  myInput = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`)
  };

  render() {
    return (
      <section className="section has-text-centered">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-3">
              <h1 className="is-size-3 mb-1">Please Enter A Store</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <input
                    ref={this.myInput}
                    type="text"
                    className="input is-medium"
                    defaultValue="my-fishmarket"
                  />
                </div>
                <div className="field">
                  <button className="button is-fullwidth is-danger">
                    Go to store
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default StorePicker;
