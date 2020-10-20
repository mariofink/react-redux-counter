import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes";

export const onIncrement = createAction(actionTypes.INCREMENT);
export const onDecrement = createAction(actionTypes.DECREMENT);
export const onAddition = createAction(actionTypes.ADD);
