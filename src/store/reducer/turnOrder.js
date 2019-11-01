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
      charList = charList.map(char => {
        if (char.id == action.resultElId) {
          updateObject(char, { speed: char.speed + 1 });
        }
      });
      return updateObject(state, { characters: charList });
  }
  return state;
};

export default reducer;
