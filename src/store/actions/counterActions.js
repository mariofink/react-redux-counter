import * as actionTypes from "../actiontypes";

export const onIncrement = () => ({ type: actionTypes.INCREMENT });
export const onDecrement = () => ({ type: actionTypes.DECREMENT });
export const onAddition = (amount) => ({
  type: actionTypes.ADD,
  value: amount,
});
