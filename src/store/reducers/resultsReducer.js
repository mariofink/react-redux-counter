import * as actionTypes from "../actiontypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return [...state, { id: new Date().toISOString(), value: action.value }];
    case actionTypes.REMOVE_RESULT:
      return state.filter((result) => result.id !== action.id);
    default:
      return state;
  }
};
