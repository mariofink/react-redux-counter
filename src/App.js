import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onIncrement,
  onDecrement,
  onAddition,
} from "./store/actions/counterActions";
import { storeResult, removeResult } from "./store/actions/resultsActions";
import "./App.css";

const App = (props) => {
  const [toAdd, setToAdd] = useState(5);
  const counter = useSelector((state) => state.counter);
  const results = useSelector((state) => state.results);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <button onClick={() => dispatch(onIncrement())}>Increase</button>
        <button onClick={() => dispatch(onDecrement())}>Decrease</button>
        <button onClick={() => dispatch(onAddition(5))}>Add 5</button>

        <fieldset>
          <input
            type="number"
            value={toAdd}
            onChange={(e) => setToAdd(parseInt(e.target.value, 10))}
          />
          <button onClick={() => dispatch(onAddition(toAdd))}>
            Add {toAdd}
          </button>
        </fieldset>

        <button onClick={() => dispatch(storeResult(counter))}>
          Store result
        </button>
        <ul>
          {results.map((result) => (
            <li
              key={result.id}
              onClick={() => dispatch(removeResult(result.id))}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
