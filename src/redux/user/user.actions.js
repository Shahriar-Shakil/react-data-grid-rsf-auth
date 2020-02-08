export const types = {
  LOGIN: {
    REQUEST: "LOGIN.REQUEST",
    SUCCESS: "LOGIN.SUCCESS",
    FAILURE: "LOGIN.FAILURE"
  },
  LOGOUT: {
    REQUEST: "LOGOUT.REQUEST",
    SUCCESS: "LOGOUT.SUCCESS",
    FAILURE: "LOGOUT.FAILURE"
  },
  AUTH_PROVIDER: {
    GOOGLE_AUTH: "GOOGLE_AUTH_REQUEST",
    FACEBOOK_AUTH: "FACEBOOK_AUTH_REQUEST"
  }
};

export const login = (emailPass) => ({
  type: types.LOGIN.REQUEST,
  emailPass
});

export const loginSuccess = (user) => ({
  type: types.LOGIN.SUCCESS,
  user
});

export const loginFailure = (error) => ({
  type: types.LOGIN.FAILURE,
  error
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS
});

export const logoutFailure = (error) => ({
  type: types.LOGOUT.FAILURE,
  error
});

export const loginWithGoogle = () => ({
  type: types.AUTH_PROVIDER.GOOGLE_AUTH
});
export const loginWithFacebook = () => ({
  type: types.AUTH_PROVIDER.FACEBOOK_AUTH
});
