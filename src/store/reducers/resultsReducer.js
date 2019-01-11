import * as actionTypes from "../actions";

const initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [
          ...state.results,
          { id: new Date().toISOString(), value: action.value }
        ]
      };
    case actionTypes.REMOVE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.id)
      };
    default:
      return state;
  }
};
