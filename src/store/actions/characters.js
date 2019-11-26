import * as actionTypes from "./actionTypes";
import * as firebase from "firebase/app";
import "firebase/firestore";

export const fetchCharactersSuccess = characters => {
  return { type: actionTypes.FETCH_CHARACTERS_SUCCESS, characters: characters };
};

export const fetchCharactersFail = error => {
  return { type: actionTypes.FETCH_CHARACTERS_FAIL, error: error };
};

export const fetchCharacters = () => {
  return dispatch => {
    firebase
      .firestore()
      .collection("characters")
      .get()
      .then(querySnapshot => {
        const charList = querySnapshot.docs.map(doc => doc.data());
        dispatch(fetchCharactersSuccess(charList));
      })
      .catch(error => {
        dispatch(fetchCharactersFail(error.message));
        console.log(error);
      });
  };
};

export const fetchSheetSuccess = sheet => {
  return {type: actionTypes.FETCH_SHEET_SUCCESS, sheet: sheet}
}

export const fetchSheetFail = error => {
  return { type: actionTypes.FETCH_SHEET_FAIL, error: error };
};

export const fetchSheet = () => {
  return dispatch => {
    firebase
      .firestore()
      .collection("baseSheets")
      .where("system","==","WoD Dark Ages")
      .get()
      .then(querySnapshot => {
        const sheet = querySnapshot.docs.map(doc => doc.data())[0].contents;
        const sheetJSON = JSON.parse(sheet)
        dispatch(fetchSheetSuccess(sheetJSON));
      })
      .catch(error => {
        dispatch(fetchSheetFail(error.message));
        console.log(error);
      });
  };
};