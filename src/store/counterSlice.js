import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 5,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    add: (state, action) => state + action.payload,
  },
});

export const { increment, decrement, add } = counterSlice.actions;

export default counterSlice.reducer;
