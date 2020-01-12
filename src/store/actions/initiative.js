import * as actionTypes from "./actionTypes";

export const initiativePass = () => {
  return { type: actionTypes.INITIATIVE_PASS };
};

export const resetInitiative = () => {
  return { type: actionTypes.RESET_INITIATIVE };
};

export const defenseIncrement = resElId => {
  return { type: actionTypes.DEFENSE_INCREMENT, resultElId: resElId };
};

export const defenseDecrement = resElId => {
  return { type: actionTypes.DEFENSE_DECREMENT, resultElId: resElId };
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

export const storeCombatChars = (charList) => {
  return {type: actionTypes.STORE_COMBAT_CHARS, chars: charList}
}

export const getCombatChars = () => {
  const defaultStart = [
    {
      id: "456",
      name: "Round",
      speed: 5,
      totalSpeed: 5,
      speedBonus: 0,
      initiative: 0,
      turnCount: 0,
      defenseActions: 0,
      type: "NPC"
    }
  ];
  if (localStorage.getItem("charsInCombat") === null) {
    return { type: actionTypes.GET_COMBAT_CHARS, chars: defaultStart };
  } else {
    const storedChars = localStorage.getItem("charsInCombat");
    const charJSON = JSON.parse(storedChars);
    return { type: actionTypes.GET_COMBAT_CHARS, chars: charJSON };
  }
};

export const removeCombatChars = () => {
  return { type: actionTypes.REMOVE_COMBAT_CHARS };
};
