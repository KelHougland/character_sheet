import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  characters: [
    {
      id: "123",
      name: "Ted",
      speed: 7,
      speedBonus: 0,
      initiative: 12,
      turnCount: 0
    },
    {
      id: "456",
      name: "Round",
      speed: 5,
      speedBonus: 0,
      initiative: 0,
      turnCount: 0
    },
    {
      id: "789",
      name: "Bill",
      speed: 6,
      speedBonus: 0,
      initiative: 17,
      turnCount: 0
    }
  ],
  view: "init"
};

const reducer = (state = initialState, action) => {
  let charList = state.characters;
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
      return updateObject(state, { characters: charList });
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
      return updateObject(state, { characters: incSpeedChars });
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
      return updateObject(state, { characters: deSpeedChars });
    case actionTypes.INIT_INCREMENT5:
      let incInitChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          incInitChars.push(
            updateObject(char, { initiative: char.initiative + 5 })
          );
        } else {
          incInitChars.push(char);
        }
      });
      return updateObject(state, { characters: incInitChars });
    case actionTypes.INIT_DECREMENT5:
      let deInitChars = [];
      charList.map(char => {
        if (char.id == action.resultElId) {
          deInitChars.push(
            updateObject(char, { initiative: char.initiative - 5 })
          );
        } else {
          deInitChars.push(char);
        }
      });
      return updateObject(state, { characters: deInitChars });
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
      return updateObject(state, { characters: changeInitChars });
    case actionTypes.ADD_CHAR:
      return state;
  }

  return state;
};

export default reducer;
