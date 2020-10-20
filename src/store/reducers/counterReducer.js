import * as actionTypes from "../actiontypes";

const initialState = 5;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.ADD:
      return state + action.value;
    default:
      return state;
  }
};
