import * as firebase from "firebase/app";
import "firebase/auth";

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  authorizedUser: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      firebase.auth().onAuthStateChanged(authUser => {
        authUser
          ? updateObject(state, { authorizedUser: authUser })
          : updateObject(state, { authorizedUser: null });
      });
      return state;
    default:
      return state;
  }
};

export default reducer;
