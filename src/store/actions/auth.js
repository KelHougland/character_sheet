import * as actionTypes from "./actionTypes";

import * as firebase from "firebase/app";
import "firebase/auth";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = (token, userId) => {
  return { type: actionTypes.AUTH_SUCCESS, idToken: token, userId: userId };
};

export const authFail = error => {
  return { type: actionTypes.AUTH_FAIL, error: error };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  return { type: actionTypes.AUTH_LOGOUT };
};

export const auth = (email, password, view) => {
  return dispatch => {
    dispatch(authStart());
    if (view === "signUp") {
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => console.log(response))
        .catch(error => console.log(error.message));
    } else if (view === "signIn") {
      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => console.log(response))
        .catch(error => console.log(error.message));
    }
  };
};
