import {all, call} from "redux-saga/effects";
import loginRootSaga from "./user/user.sagas";
function* rootSaga() {
  yield all([call(loginRootSaga)]);
}

export default rootSaga;
