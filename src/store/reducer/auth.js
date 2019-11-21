import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = { token: null, userId: null, error: null };

const authStart = (state, action) => {
  return updateObject(state, { error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    user: null,
    error: null
  });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const authListener = (state, action) => {
  return updateObject(state, { user: action.user });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_LISTENER:
      return authListener(state, action);
    default:
      return state;
  }
};

export default reducer;
