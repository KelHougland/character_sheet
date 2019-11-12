import * as firebase from "firebase/app";
import "firebase/auth";

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  authorizedUser: null
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
