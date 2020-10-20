import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";
import "./App.css";

const App = (props) => {
  const [toAdd, setToAdd] = useState(5);
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.counter}</p>
        <button onClick={props.onIncrement}>Increase</button>
        <button onClick={props.onDecrease}>Decrease</button>
        <button onClick={() => props.onAddition(5)}>Add 5</button>

        <fieldset>
          <input
            type="number"
            value={toAdd}
            onChange={(e) => setToAdd(parseInt(e.target.value, 10))}
          />
          <button onClick={() => props.onAddition(toAdd)}>Add {toAdd}</button>
        </fieldset>

        <button onClick={() => props.storeResult(props.counter)}>
          Store result
        </button>
        <ul>
          {props.results.map((result) => (
            <li key={result.id} onClick={() => props.removeResult(result.id)}>
              {result.value}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrease: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddition: (amount) => dispatch({ type: actionTypes.ADD, value: amount }),
    storeResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, value: result }),
    removeResult: (id) => {
      dispatch({ type: actionTypes.REMOVE_RESULT, id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
