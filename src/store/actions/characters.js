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
      .then(qeurySnapshot => {
        const charList = qeurySnapshot.docs.map(doc => doc.data());
        dispatch(fetchCharactersSuccess(charList));
      })
      .catch(error => {
        dispatch(fetchCharactersFail(error.message));
        console.log(error);
      });
  };
};
