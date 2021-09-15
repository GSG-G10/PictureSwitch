import React, { Component } from "react";
import data from "./data";
import Header from "./Components/Header/Header";
class App extends Component {
  state = {
    search: "",
  };


  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  

  render() {
    return (
      <div className="App">
        <Header handleChange= {this.handleChange} />
      </div>
    );
  }
}

export default App;
