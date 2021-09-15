import React, { Component } from "react";
import data from "./data";
import Header from "./Components/Header/Header";
import PictureCard from "./Components/PictureCard/PictureCard";
class App extends Component {
  state = {
    search: "",
    data: ''
  };

  componentDidMount = () => {
    const query = 'cat';
    data(query).then(data => this.setState({ data: data }));
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  

  render() {
    if (!this.state.data) {
      return <h3>...Loading</h3>;
    }
    return (
      <div className="App">
        <Header handleChange= {this.handleChange} />
        <main>
          <PictureCard data={this.state.data} />
        </main>
      </div>
    );
  }
}

export default App;
