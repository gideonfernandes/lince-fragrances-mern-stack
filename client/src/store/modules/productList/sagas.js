import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadProductsSuccess } from './actions';

function* loadProducts() {
  const response = yield call(api.get, '/products');

  let products = response.data;

  if (products.length <= 0) {
    toast.error('Houve um problema no carregamento dos produtos.');
    return;
  };

  yield put(loadProductsSuccess(products));
};

export default all([
  takeLatest('@productList/LOAD_REQUEST', loadProducts),
]);
