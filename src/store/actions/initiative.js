import * as actionTypes from "./actionTypes";

export const initiativePass = () => {
  return { type: actionTypes.INITIATIVE_PASS };
};

export const speedIncrement = resElId => {
  return { type: actionTypes.SPEED_INCREMENT, resultElId: resElId };
};

export const speedDecrement = resElId => {
  return { type: actionTypes.SPEED_DECREMENT, resultElId: resElId };
};

export const initIncrement5 = resElId => {
  return { type: actionTypes.INIT_INCREMENT5, resultElId: resElId };
};

export const initDecrement5 = resElId => {
  return { type: actionTypes.INIT_DECREMENT5, resultElId: resElId };
};
