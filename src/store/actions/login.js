import * as actionTypes from "./actionTypes";

export const changeView = newView => {
  return { type: actionTypes.CHANGE_VIEW, view: newView };
};

export const changeEmail = newEmail => {
  return { type: actionTypes.CHANGE_EMAIL, email: newEmail };
};

export const changeEmailConfirm = newEConfirm => {
  return { type: actionTypes.CHANGE_EMAILCONFIRM, emailConfirm: newEConfirm };
};

export const changeUserName = newName => {
  return { type: actionTypes.CHANGE_USERNAME, userName: newName };
};

export const changePassword = newPassword => {
  return { type: actionTypes.CHANGE_PASSWORD, password: newPassword };
};

export const changePswdConfirm = newPConfirm => {
  return { type: actionTypes.CHANGE_PSWDCONFIRM, pswdConfirm: newPConfirm };
};

export const acceptTerms = () => {
  return { type: actionTypes.ACCEPT_TERMS };
};

export const createUser = newUser => {
  return { type: actionTypes.CREATE_USER, user: newUser };
};
