import React from "react";
import Order from "./Order";
import Inventory from "./Inventory";
import Header from "./Header";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    this.loadFishes();
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    });
  };
  loadFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };
  addToOrder = index => {
    const order = { ...this.state.order };

    order[index] = order[index] + 1 || 1;

    this.setState({
      order: order
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                addToOrder={this.addToOrder}
                key={key}
                index={key}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          fishes={this.state.fishes}
          loadFishes={this.loadFishes}
          addFish={this.addFish}
        />
      </div>
    );
  }
}

export default App;
