import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  email: "Email",
  emailConfirm: "Confirm Email",
  password: "Password",
  passwordConfirm: "Confirm Password",
  userName: "UserName",
  view: "initial"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VIEW:
      return updateObject(state, { view: action.view });
    default:
      return state;
  }
};

export default reducer;
