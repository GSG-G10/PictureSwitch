import React, { Component } from "react";
import data from "./data";
import Header from "./Components/Header/Header";
import PictureCard from "./Components/PictureCard/PictureCard";
import './App.css'
class App extends Component {
  state = {
    search: "",
    data: "",
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.search !== prevState.search) {
      data(this.state.search).then((data) => this.setState({ data: data }));
    }
  };
  componentDidMount = () => {
    data(this.state.search).then((data) => this.setState({ data: data }));
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };


  render() {
    if (!this.state.data) {
      return <div class="lds-dual-ring"></div>;
    }
    return (
      <div className="App">
        <Header handleChange={this.handleChange} />
        <main className="main">
          <PictureCard data={this.state.data} />
        </main>
      </div>
    );
  }
}

export default App;
