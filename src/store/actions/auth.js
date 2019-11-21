import * as actionTypes from "./actionTypes";

import * as firebase from "firebase/app";
import "firebase/auth";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = () => {
  return { type: actionTypes.AUTH_SUCCESS };
};

export const authFail = error => {
  return { type: actionTypes.AUTH_FAIL, error: error };
};

export const authCheck = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: actionTypes.AUTH_CHECK,
        user: user
      });
    } else {
      dispatch({
        type: actionTypes.AUTH_CHECK,
        user: null
      });
    }
  });
};

export const auth = (email, password, view) => {
  return dispatch => {
    dispatch(authStart());
    if (view === "signUp") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(dispatch(authSuccess()))
        .catch(error => {
          dispatch(authFail(error.message));
        });
    } else if (view === "signIn") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(dispatch(authSuccess))
        .catch(error => {
          dispatch(authFail(error.message));
        });
    }
  };
};

export const authSignout = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(dispatch({ type: actionTypes.AUTH_SIGNOUT }))
      .catch(error => {
        dispatch(authFail(error.message));
      });
  };
};
