import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toAdd: 5
    };
  }

  onChangeHandler = e => {
    this.setState({ toAdd: parseInt(e.target.value, 10) });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.counter}</p>
          <button onClick={this.props.onIncrement}>Increase</button>
          <button onClick={this.props.onDecrease}>Decrease</button>
          <button onClick={() => this.props.onAddition(5)}>Add 5</button>

          <fieldset>
            <input
              type="number"
              value={this.state.toAdd}
              onChange={this.onChangeHandler}
            />
            <button onClick={() => this.props.onAddition(this.state.toAdd)}>
              Add {this.state.toAdd}
            </button>
          </fieldset>

          <button onClick={() => this.props.storeResult(this.props.counter)}>
            Store result
          </button>
          <ul>
            {this.props.results.map(result => (
              <li>{result}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    results: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrease: () => dispatch({ type: "DECREASE" }),
    onAddition: amount => dispatch({ type: "ADD", value: amount }),
    storeResult: result => dispatch({ type: "STORE_RESULT", result: result })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
