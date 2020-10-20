import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes";

export const storeResult = createAction(actionTypes.STORE_RESULT);
export const removeResult = createAction(actionTypes.REMOVE_RESULT);
