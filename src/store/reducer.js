const initialState = {
  counter: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
    case "DECREASE":
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};
