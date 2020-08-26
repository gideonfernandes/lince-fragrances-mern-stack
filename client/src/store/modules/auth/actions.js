export function loadTokenRequest() {
  return {
    type: '@auth/LOAD_TOKEN_REQUEST',
  };
};

export function loadTokenSuccess(user) {
  return {
    type: '@auth/LOAD_TOKEN_SUCCESS',
    user,
  };
};

export function registerRequest(userData) {
  return {
    type: '@auth/REGISTER_REQUEST',
    userData,
  };
};

export function loginRequest(userData) {
  return {
    type: '@auth/LOGIN_REQUEST',
    userData,
  };
};

export function authSuccess(token, user) {
  return {
    type: '@auth/SUCCESS',
    token,
    user,
  };
};

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
};