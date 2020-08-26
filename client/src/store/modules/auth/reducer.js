function auth(state = {
  isAuthenticated: false,
  loading: true,
  user: null,
}, action) {
  switch (action.type) {
    case '@auth/SUCCESS':
      localStorage.setItem('token', action.token);
      localStorage.setItem('authenticateUserId', action.user);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user,
      };

    case '@auth/LOAD_TOKEN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user,
      };
    case '@auth/LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('authenticateUserId');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  };
};

export default auth;
