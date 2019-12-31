import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  charactersInCombat: [{}],
  addChar: {
    name: "name",
    speed: "speed",
    speedBonus: "speed bonus",
    initiative: "initiative",
    type: "PC"
  }
};

const reducer = (state = initialState, action) => {
  let charList = state.charactersInCombat;
  switch (action.type) {
    case actionTypes.INITIATIVE_PASS:
      let charInits = charList.map(char => {
        let tempChar = char;
        if (tempChar.initiative >= 50) {
          tempChar.initiative -= 50;
          tempChar.turnCount += 1;
        }
        return tempChar.initiative;
      });
      let maxInit = Math.max(...charInits);
      while (maxInit < 50) {
        charList = charList.map(char =>
          updateObject(char, { initiative: char.initiative + char.speed })
        );
        charInits = charList.map(char => char.initiative);
        maxInit = Math.max(...charInits);
      }
      return updateObject(state, { charactersInCombat: charList });
    case actionTypes.SPEED_INCREMENT:
      let incSpeedChars = charList.map(char => {
        if (char.id === action.resultElId) {
          return updateObject(char, { speedBonus: char.speedBonus + 1 });
        } else {
          return char;
        }
      });
      return updateObject(state, { charactersInCombat: incSpeedChars });
    case actionTypes.SPEED_DECREMENT:
      let deSpeedChars = charList.map(char => {
        if (char.id === action.resultElId) {
          return updateObject(char, { speedBonus: char.speedBonus - 1 });
        } else {
          return char;
        }
      });
      return updateObject(state, { charactersInCombat: deSpeedChars });
    case actionTypes.INIT_INCREMENT1:
      let inc1InitChars = charList.map(char => {
        if (char.id === action.resultElId) {
          return updateObject(char, { initiative: char.initiative + 1 });
        } else {
          return char;
        }
      });
      return updateObject(state, { charactersInCombat: inc1InitChars });
    case actionTypes.INIT_DECREMENT1:
      let de1InitChars = charList.map(char => {
        if (char.id === action.resultElId) {
          return updateObject(char, { initiative: char.initiative - 1 });
        } else {
          return char;
        }
      });
      return updateObject(state, { charactersInCombat: de1InitChars });
    case actionTypes.INIT_INCREMENT5:
      let inc5InitChars = charList.map(char => {
        if (char.id === action.resultElId) {
          return updateObject(char, { initiative: char.initiative + 5 });
        } else {
          return char;
        }
      });
      return updateObject(state, { charactersInCombat: inc5InitChars });
    case actionTypes.INIT_DECREMENT5:
      let de5InitChars = charList.map(char => {
        if (char.id === action.resultElId) {
          return updateObject(char, { initiative: char.initiative - 5 });
        } else {
          return char;
        }
      });
      return updateObject(state, { charactersInCombat: de5InitChars });
    case actionTypes.ADD_CHAR:
      let newChar = {
        id: new Date(),
        name: action.character.name,
        speed: Number(action.character.speed),
        totalSpeed:
          Number(action.character.speed) + Number(action.character.speedBonus),
        speedBonus: Number(action.character.speedBonus),
        initiative: Number(action.character.initiative),
        turnCount: 0
      };
      return updateObject(state, {
        charactersInCombat: state.charactersInCombat.concat(newChar),
        addChar: {
          name: "name",
          speed: "speed",
          speedBonus: "speed bonus",
          initiative: "initiative",
          type: "PC"
        }
      });
    case actionTypes.DEL_CHAR:
      const updatedChars = state.charactersInCombat.filter(
        char => char.id !== action.resultElId
      );
      return updateObject(state, { charactersInCombat: updatedChars });

    case actionTypes.CHANGE_ADDCHAR_NAME:
      let midNameChar = updateObject(state.addChar, { name: action.name });

      return updateObject(state, { addChar: midNameChar });

    case actionTypes.CHANGE_ADDCHAR_SPEED:
      let midSpeedChar = updateObject(state.addChar, { speed: action.speed });
      return updateObject(state, { addChar: midSpeedChar });

    case actionTypes.CHANGE_ADDCHAR_SPEEDBONUS:
      let midSpeedBonusChar = updateObject(state.addChar, {
        speedBonus: action.speedBonus
      });
      return updateObject(state, { addChar: midSpeedBonusChar });

    case actionTypes.CHANGE_ADDCHAR_INIT:
      let midInitChar = updateObject(state.addChar, {
        initiative: action.init
      });

      return updateObject(state, { addChar: midInitChar });
    case actionTypes.GET_COMBAT_CHARS:
      console.log(action.chars);
      return updateObject(state, { charactersInCombat: action.chars });

    default:
      return state;
  }
};

export default reducer;
