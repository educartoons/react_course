import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input ref={this.nameRef} name="name" type="text" placeholder="Name" />
        <input
          ref={this.priceRef}
          name="price"
          type="text"
          placeholder="Price"
        />
        <select ref={this.statusRef} name="status" id="">
          <option value="fresh">Fresh!</option>
          <option value="soldout">Sold Out!</option>
        </select>
        <textarea
          ref={this.descRef}
          name="desc"
          id=""
          cols="30"
          rows="10"
          placeholder="description"
        />
        <input
          ref={this.imageRef}
          name="image"
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
