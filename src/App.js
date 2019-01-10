import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.counter}</p>
          <button onClick={this.props.onIncrement}>Increase</button>
          <button onClick={this.props.onDecrease}>Decrease</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrease: () => dispatch({ type: "DECREASE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
