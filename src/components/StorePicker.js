import React from "react";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = event => {
    // 1. Detener el evento de Form
    event.preventDefault();
    // 2. Atrapar el valor del input
    console.log(this.myInput.value.value);
    const storeName = this.myInput.value.value;
    // 3. Direccionar a la siguiente vista
    this.props.history.push(`/store/${storeName}`);
  };
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore} action="">
        <h2>Select your store</h2>
        <input
          ref={this.myInput}
          type="text"
          placeholder="Store Name"
          required
        />
        <button type="submit">Enter to the Store</button>
      </form>
    );
  }
}

export default StorePicker;
