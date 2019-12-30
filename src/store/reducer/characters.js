import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

let initialState = {
  characters: null,
  character: null,
  charLoadError: null,
  sheet: null,
  system: null,
  systemId: null,
  sheetLoadError: null
};

const fetchCharactersSuccess = (state, action) => {
  return updateObject(state, { characters: action.characters });
};

const fetchCharactersFail = (state, action) => {
  return updateObject(state, { charLoadError: action.error });
};

const fetchSheetSuccess = (state, action) => {
  return updateObject(state, { sheet: JSON.parse(action.sheet), system: action.system, systemId: action.systemId });
};

const fetchSheetFail = (state, action) => {
  return updateObject(state, { sheetLoadError: action.error });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return fetchCharactersSuccess(state, action);
    case actionTypes.FETCH_CHARACTERS_FAIL:
      return fetchCharactersFail(state, action);
      case actionTypes.FETCH_SHEET_SUCCESS:
        return fetchSheetSuccess(state, action);
      case actionTypes.FETCH_SHEET_FAIL:
        return fetchSheetFail(state, action);

    default:
      return state;
  }
};

export default reducer;
