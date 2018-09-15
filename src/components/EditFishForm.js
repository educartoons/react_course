import React, { Component } from "react";

class EditFishForm extends Component {
  handleChange = event => {
    //1. take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={this.props.fish.name}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="price"
          value={this.props.fish.price}
        />
        <select
          onChange={this.handleChange}
          name="status"
          id=""
          value={this.props.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea
          onChange={this.handleChange}
          name="desc"
          id=""
          cols="30"
          rows="10"
          value={this.props.fish.desc}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="image"
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
