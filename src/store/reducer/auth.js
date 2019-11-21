import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = { error: null, user: null };

const authStart = (state, action) => {
  return updateObject(state, { error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    error: null
  });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const authSignout = (state, action) => {
  return updateObject(state, { user: null, error: null });
};

const authCheck = (state, action) => {
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
    case actionTypes.AUTH_SIGNOUT:
      return authSignout(state, action);
    case actionTypes.AUTH_CHECK:
      return authCheck(state, action);
    default:
      return state;
  }
};

export default reducer;
