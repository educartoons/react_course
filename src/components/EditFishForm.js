import React, { Component } from "react";

class EditFishForm extends Component {
  render() {
    return (
      <h1>
        {this.props.fish.name}
        {console.table(this.props.fish)}
      </h1>
    );
  }
}

export default EditFishForm;
