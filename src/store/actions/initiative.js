import * as actionTypes from "./actionTypes";

export const initiativePass = () => {
  return { type: actionTypes.INITIATIVE_PASS };
};

export const speedIncrement = resElId => {
  return { type: actionTypes.SPEED_INCREMENT, resultElId: resElId };
};
