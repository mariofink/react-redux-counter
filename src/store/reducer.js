const initialState = {
  counter: 5,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: [...state.results, state.counter]
      };
    default:
      return state;
  }
};
