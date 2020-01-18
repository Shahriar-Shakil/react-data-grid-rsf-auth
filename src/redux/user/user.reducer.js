import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  isAuthenticated:!!localStorage.getItem("access_token"),
  token: null,
  currentUser: [],
  error: null
};
export default function userReducer(state = INITIAL_STATE, {type, payload}) {
 
  switch (type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser:payload,
        token: payload.token,

      };
    case UserActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: payload
      };
      case UserActionTypes.LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated:false
        }
    default:
      return state;
  }
}
