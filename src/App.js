import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  increase = () => {
    this.setState({
      counter: this.state.counter + 1 // as numbers are a primitive type, no need for copying
    });
  };
  decrease = () => {
    this.setState({
      counter: this.state.counter - 1 // as numbers are a primitive type, no need for copying
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.counter}</p>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
        </header>
      </div>
    );
  }
}

export default App;
