import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  characters: [
    { name: "Ted", speed: 7, initiative: 12 },
    { name: "Round", speed: 5, initiative: 0 },
    { name: "Bill", speed: 6, initiative: 17 }
  ],
  view: "init"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIATIVEPASS:
      let charList = state.characters;
      let charInits = charList.map(char => char.initiative);
      let maxInit = Math.max(...charInits);
      while (maxInit < 50) {
        charList = charList.map(char =>
          updateObject(char, { initiative: char.initiative + char.speed })
        );
        charInits = charList.map(char => char.initiative);
        maxInit = Math.max(...charInits);
      }
      return updateObject(state, { characters: charList });
  }
  return state;
};

export default reducer;
