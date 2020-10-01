export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token };
}

export function loginSubmit(username, password) {
  return { type: LOGIN_SUBMIT, username, password };
}

export function loginFailure(msg) {
  return { type: LOGIN_FAILURE, msg };
}
