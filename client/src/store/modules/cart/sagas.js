import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../utils/format';

function* addToCart({ productId }) {
  const productExists = yield select(state => 
    state.cart.find(p => p._id === productId)
  );

  const stock = yield call(api.get, `/stocks/${productId}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque.');
    return;
  };

  if (productExists) {
    yield put(updateAmountSuccess(productId, amount));
  } else {
    const response = yield call(api.get, `/products/${productId}`);

    const productData = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(productData));
  };
};

function* updateAmount({ productId, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stocks/${productId}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque.')
    return;
  };

  yield put(updateAmountSuccess(productId, amount));
};

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
