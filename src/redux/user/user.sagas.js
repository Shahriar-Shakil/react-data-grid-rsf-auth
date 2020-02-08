import firebase from "firebase";
import {
  all,
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure
} from "./user.actions.js";

import rsf from "../rsf";

const authProvider = new firebase.auth.GoogleAuthProvider();
const fbAuth = new firebase.auth.FacebookAuthProvider();
function* loginSaga({emailPass: {email, password}}) {
  console.log("working");
  try {
    const data = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password
    );
    console.log(data);
    yield put(loginSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(loginFailure(error));
  }
}

function* loginWithGoogle() {
  try {
    const data = yield call(rsf.auth.signInWithPopup, authProvider);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
function* loginWithFacebook() {
  try {
    const data = yield call(rsf.auth.signInWithPopup, fbAuth);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut);
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const {user} = yield take(channel);
    if (user) {
      yield put(loginSuccess(user));
    } else yield put(logoutSuccess());
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
    takeEvery(types.AUTH_PROVIDER.GOOGLE_AUTH, loginWithGoogle),
    takeEvery(types.AUTH_PROVIDER.FACEBOOK_AUTH, loginWithFacebook)
  ]);
}
