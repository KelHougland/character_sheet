import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

let initialState = {
  characters: null,
  character: null,
  charLoadError: null
};

const fetchCharactersSuccess = (state, action) => {
  return updateObject(state, { characters: action.characters });
};

const fetchCharactersFail = (state, action) => {
  return updateObject(state, { charLoadError: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return fetchCharactersSuccess(state, action);
    case actionTypes.FETCH_CHARACTERS_FAIL:
      return fetchCharactersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
