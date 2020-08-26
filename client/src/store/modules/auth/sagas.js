import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import setAuthToken from '../../../services/setAuthToken';
import { loadTokenSuccess, authSuccess } from './actions';

function* loadTokenRequest() {
  yield put(loadTokenSuccess(localStorage.getItem('authenticateUserId')));
};

function* registerRequest({ userData }) {
  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = yield call(api.post,
      '/users',
      userData,
      config,
    );

    const { token, user } = response.data;
    
    yield put(authSuccess(token, user.id));
    yield put(setAuthToken(localStorage.token));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        toast.error('Campos informados estão incorretos ou usuário já existe.');
      } else if (error.response.status === 500) {
        toast.error('Houve um erro no servidor.');
      } else {
        toast.error(error.message);
      };
    };

    return;
  };
};

function* loginRequest({ userData }) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = yield call(api.post,
      '/sessions',
      userData,
      config,
    );

    const { token, user } = response.data;
    
    yield put(authSuccess(token, user.id));
    yield put(setAuthToken(localStorage.token));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        toast.error('Campos informados estão incorretos.');
      } else if (error.response.status === 401) {
        toast.error('Credenciais inválidas.');
      } else if (error.response.status === 500) {
        toast.error('Houve um erro no servidor.');
      } else {
        toast.error(error.message);
      };
    };

    return;
  };
};

export default all([
  takeLatest('@auth/LOAD_TOKEN_REQUEST', loadTokenRequest),
  takeLatest('@auth/REGISTER_REQUEST', registerRequest),
  takeLatest('@auth/LOGIN_REQUEST', loginRequest),
]);
