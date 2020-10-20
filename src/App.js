import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "./store/actions";
import "./App.css";

const App = (props) => {
  const [toAdd, setToAdd] = useState(5);
  const counter = useSelector((state) => state.counter);
  const results = useSelector((state) => state.results);
  const dispatch = useDispatch();

  // ACTIONS
  const onIncrement = () => dispatch({ type: actionTypes.INCREMENT });
  const onDecrease = () => dispatch({ type: actionTypes.DECREMENT });
  const onAddition = (amount) =>
    dispatch({ type: actionTypes.ADD, value: amount });
  const storeResult = (result) =>
    dispatch({ type: actionTypes.STORE_RESULT, value: result });
  const removeResult = (id) =>
    dispatch({ type: actionTypes.REMOVE_RESULT, id: id });

  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <button onClick={onIncrement}>Increase</button>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={() => onAddition(5)}>Add 5</button>

        <fieldset>
          <input
            type="number"
            value={toAdd}
            onChange={(e) => setToAdd(parseInt(e.target.value, 10))}
          />
          <button onClick={() => onAddition(toAdd)}>Add {toAdd}</button>
        </fieldset>

        <button onClick={() => storeResult(counter)}>Store result</button>
        <ul>
          {results.map((result) => (
            <li key={result.id} onClick={() => removeResult(result.id)}>
              {result.value}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
