import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { purchaseSuccess} from './actions';

function* purchase({ user_id, order, total }) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = yield call(api.post, `purchases/${user_id}`, {
        order,
        total,
      },
      config,
    );

    const purchaseData = response.data;
    yield put(purchaseSuccess(purchaseData));

  } catch (error) {
    toast.error(error.message);
  };
};

export default all([
  takeLatest('@purchase/REQUEST', purchase),
]);
