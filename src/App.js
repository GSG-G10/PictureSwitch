import PictureCard from "./Components/PictureCard/PictureCard";
import React, { Component } from 'react';
import data from './data'

class App extends Component {

  state = {
    data: ''
  };

  componentDidMount = () => {
    const query = 'cat';
    data(query).then(data => this.setState({ data: data }));
  }

  render() {
    if (!this.state.data) {
      return <h3>...Loading</h3>;
    }
    return (
      <div className="App">
        <main>
          <PictureCard data={this.state.data} />
        </main>
      </div>
    );
  }

}

export default App;
