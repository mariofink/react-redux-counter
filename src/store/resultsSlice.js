import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: [],
  reducers: {
    storeResult: (state, action) => {
      state.push({ id: new Date().toISOString(), value: action.payload });
    },
    removeResult: (state, action) => {
      return state.filter((result) => result.id !== action.payload);
    },
  },
});

export const { storeResult, removeResult } = resultsSlice.actions;
export default resultsSlice.reducer;
