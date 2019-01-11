import * as actionTypes from "./actions";

const initialState = {
  counter: 5,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [
          ...state.results,
          { id: new Date().toISOString(), value: state.counter }
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
