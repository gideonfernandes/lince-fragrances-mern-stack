import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import productList from './productList/sagas';
import cart from './cart/sagas';
import purchase from './purchase/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    productList,
    cart,
    purchase,
  ]);
};
