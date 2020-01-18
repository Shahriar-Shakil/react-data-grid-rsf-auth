import UserActionTypes from "./user.types";
export const userLoginRequest = userIdAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_REQUEST,
  payload: userIdAndPassword
});

export const loginSuccess = user => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = error => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: error
});

export const logOut = () => ({
  type: UserActionTypes.LOGOUT_SUCCESS,
});

