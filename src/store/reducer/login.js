import * as firebase from "firebase/app";
import "firebase/auth";

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  email: "",
  emailConfirm: "",
  password: "",
  passwordConfirm: "",
  userName: "",
  view: "initial",
  accepted: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VIEW:
      return updateObject(state, { view: action.view });
    case actionTypes.CHANGE_EMAIL:
      return updateObject(state, { email: action.email });
    case actionTypes.CHANGE_EMAILCONFIRM:
      return updateObject(state, { emailConfirm: action.emailConfirm });
    case actionTypes.CHANGE_USERNAME:
      return updateObject(state, { userName: action.userName });
    case actionTypes.CHANGE_PASSWORD:
      return updateObject(state, { password: action.password });
    case actionTypes.CHANGE_PSWDCONFIRM:
      return updateObject(state, { passwordConfirm: action.pswdConfirm });
    case actionTypes.ACCEPT_TERMS:
      return updateObject(state, { accepted: !state.accepted });
    case actionTypes.CREATE_USER:
      firebase
        .auth()
        .createUserWithEmailAndPassword(action.user.email, action.user.password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    default:
      return state;
  }
};

export default reducer;
