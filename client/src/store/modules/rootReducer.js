import { combineReducers } from 'redux';

import auth from './auth/reducer';
import productList from './productList/reducer';
import cart from './cart/reducer';
import purchase from './purchase/reducer';

export default combineReducers({
  auth,
  productList,
  cart,
  purchase,
});
