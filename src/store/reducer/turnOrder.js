import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  charactersInCombat: [
    {
      id: "456",
      name: "Round",
      speed: 5,
      speedBonus: 0,
      initiative: 0,
      turnCount: 0,
      type: "NPC"
    }
  ],
  view: "init"
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
      let incSpeedChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          incSpeedChars.push(
            updateObject(char, { speedBonus: char.speedBonus + 1 })
          );
        } else {
          incSpeedChars.push(char);
        }
      });
      return updateObject(state, { charactersInCombat: incSpeedChars });
    case actionTypes.SPEED_DECREMENT:
      let deSpeedChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          deSpeedChars.push(
            updateObject(char, { speedBonus: char.speedBonus - 1 })
          );
        } else {
          deSpeedChars.push(char);
        }
      });
      return updateObject(state, { charactersInCombat: deSpeedChars });
    case actionTypes.INIT_INCREMENT1:
      let inc1InitChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          inc1InitChars.push(
            updateObject(char, { initiative: char.initiative + 1 })
          );
        } else {
          inc1InitChars.push(char);
        }
      });
      return updateObject(state, { charactersInCombat: inc1InitChars });
    case actionTypes.INIT_DECREMENT1:
      let de1InitChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          de1InitChars.push(
            updateObject(char, { initiative: char.initiative - 1 })
          );
        } else {
          de1InitChars.push(char);
        }
      });
      return updateObject(state, { charactersInCombat: de1InitChars });
    case actionTypes.INIT_INCREMENT5:
      let inc5InitChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          inc5InitChars.push(
            updateObject(char, { initiative: char.initiative + 5 })
          );
        } else {
          inc5InitChars.push(char);
        }
      });
      return updateObject(state, { charactersInCombat: inc5InitChars });
    case actionTypes.INIT_DECREMENT5:
      let de5InitChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          de5InitChars.push(
            updateObject(char, { initiative: char.initiative - 5 })
          );
        } else {
          de5InitChars.push(char);
        }
      });
      return updateObject(state, { charactersInCombat: de5InitChars });
    case actionTypes.INIT_CHANGE:
      let changeInitChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          changeInitChars.push(
            updateObject(char, { initiative: char.initiative + action.val })
          );
        } else {
          changeInitChars.push(char);
        }
      });
      return updateObject(state, { charactersInCombat: changeInitChars });
    case actionTypes.ADD_CHAR:
      let newChar = {
        id: new Date(),
        name: action.character.name,
        speed: Number(action.character.speed),
        speedBonus: 0,
        initiative: Number(action.character.initiative),
        turnCount: 0
      };
      return updateObject(state, {
        charactersInCombat: state.charactersInCombat.concat(newChar)
      });
    case actionTypes.DEL_CHAR:
      const updatedChars = state.charactersInCombat.filter(
        char => char.id !== action.resultElId
      );
      return updateObject(state, { charactersInCombat: updatedChars });
  }

  return state;
};

export default reducer;
