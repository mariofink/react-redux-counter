import * as actionTypes from "../actiontypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return [
        ...state,
        { id: new Date().toISOString(), value: action.payload },
      ];
    case actionTypes.REMOVE_RESULT:
      return state.filter((result) => result.id !== action.payload);
    default:
      return state;
  }
};
