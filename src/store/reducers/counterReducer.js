import { createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes";

const counterReducer = createReducer(5, (builder) => {
  builder
    .addCase(actionTypes.INCREMENT, (state) => state + 1)
    .addCase(actionTypes.DECREMENT, (state) => state - 1)
    .addCase(actionTypes.ADD, (state, action) => state + action.payload);
});

export default counterReducer;
