import UserActionTypes from "./user.types";
import { takeLatest, put, all, call } from "redux-saga/effects";

import { loginSuccess, loginFailure } from "./user.actions";
import login from "../../api/loginApi";

export function* signInWithUserID(payload) {
  try {
    const {
      data: { user, token, employee_info, office_info }
    } = yield call(login, payload);
    //console.log(user)
    localStorage.setItem("access_token", token);
    localStorage.setItem("office_info", JSON.stringify(office_info));
    localStorage.setItem("employee_info", JSON.stringify(employee_info));
    localStorage.setItem("office_key", 0)
    yield put(loginSuccess({ user, token, employee_info, office_info }));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
export function* userSagas() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_REQUEST, signInWithUserID);
}
