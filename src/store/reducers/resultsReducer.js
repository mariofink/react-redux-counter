import { createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes";

const resultsReducer = createReducer([], (builder) => {
  builder
    .addCase(actionTypes.STORE_RESULT, (state, action) => {
      state.push({ id: new Date().toISOString(), value: action.payload });
    })
    .addCase(actionTypes.REMOVE_RESULT, (state, action) => {
      return state.filter((result) => result.id !== action.payload);
    });
});

export default resultsReducer;
