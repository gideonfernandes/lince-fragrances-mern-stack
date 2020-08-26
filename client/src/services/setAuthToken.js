import api from './api';

const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common['auth-token'] = token;
  } else {
    delete api.defaults.headers.common['auth-token'];
  };
};

export default setAuthToken;
