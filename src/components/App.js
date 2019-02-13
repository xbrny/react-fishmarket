import React, { Component } from "react";
import Proptypes from "prop-types";
import sampleFishes from "../sampleFishes";
import base from "../base";

import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends Component {
  static propTypes = {
    match: Proptypes.object
  };

  state = {
    fishes: {},
    cart: {},
    isLoading: false
  };

  componentDidMount() {
    const { params } = this.props.match;
    const cart = localStorage.getItem(params.id);

    if (cart) {
      this.setState({ cart: JSON.parse(cart) });
    }

    this.ref = base.syncState(`${params.id}/fishes`, {
      context: this,
      state: "fishes"
    });
    // setTimeout(() => this.setState({isLoading: false}), 1000)
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.id, JSON.stringify(this.state.cart));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addToCart = id => {
    const cart = { ...this.state.cart };
    cart[id] = cart[id] + 1 || 1;
    this.setState({ cart });
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish-${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  updateFish = (id, fish) => {
    const fishes = { ...this.state.fishes };
    fishes[id] = fish;
    this.setState({ fishes });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  deleteFromCart = key => {
    const cart = { ...this.state.cart };
    delete cart[key];
    this.setState({ cart });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  render() {
    const { fishes, cart, isLoading } = this.state;
    return (
      <div className="columns is-gapless">
        <div className="column">
          <div className="box is-fullheight">
            <Header title="Menu" />
            {isLoading && (
              <span className="icon is-medium">
                <i className="fas fa-spinner fa-pulse fa-2x" />
              </span>
            )}
            {!isLoading && <Menu fishes={fishes} addToCart={this.addToCart} />}
          </div>
        </div>
        <div className="column">
          <div className="box is-fullheight">
            <Order
              cart={cart}
              fishes={fishes}
              deleteFromCart={this.deleteFromCart}
            />
          </div>
        </div>
        <div className="column">
          <div className="box is-fullheight">
            <Inventory
              loadSampleFishes={this.loadSampleFishes}
              addFish={this.addFish}
              fishes={fishes}
              updateFish={this.updateFish}
              deleteFish={this.deleteFish}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
