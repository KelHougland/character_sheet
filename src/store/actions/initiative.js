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

export const initIncrement1 = resElId => {
  return { type: actionTypes.INIT_INCREMENT1, resultElId: resElId };
};

export const initDecrement1 = resElId => {
  return { type: actionTypes.INIT_DECREMENT1, resultElId: resElId };
};

export const initIncrement5 = resElId => {
  return { type: actionTypes.INIT_INCREMENT5, resultElId: resElId };
};

export const initDecrement5 = resElId => {
  return { type: actionTypes.INIT_DECREMENT5, resultElId: resElId };
};

export const addChar = char => {
  return {
    type: actionTypes.ADD_CHAR,
    character: char
  };
};

export const delChar = resElId => {
  return {
    type: actionTypes.DEL_CHAR,
    resultElId: resElId
  };
};

export const changeAddCharName = charName => {
  return {
    type: actionTypes.CHANGE_ADDCHAR_NAME,
    name: charName
  };
};

export const changeAddCharSpeed = charSpeed => {
  return {
    type: actionTypes.CHANGE_ADDCHAR_SPEED,
    speed: charSpeed
  };
};

export const changeAddCharSpeedBonus = charSpeedBonus => {
  return {
    type: actionTypes.CHANGE_ADDCHAR_SPEEDBONUS,
    speedBonus: charSpeedBonus
  };
};

export const changeAddCharInit = charInit => {
  return {
    type: actionTypes.CHANGE_ADDCHAR_INIT,
    init: charInit
  };
};
