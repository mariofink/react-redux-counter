import * as actionTypes from "../actiontypes";

export const storeResult = (result) => ({
  type: actionTypes.STORE_RESULT,
  value: result,
});
export const removeResult = (id) => ({
  type: actionTypes.REMOVE_RESULT,
  id: id,
});
