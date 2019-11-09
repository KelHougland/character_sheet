import * as actionTypes from "./actionTypes";

export const changeView = (newView) => {
  return { type: actionTypes.CHANGE_VIEW, view: newView};
};