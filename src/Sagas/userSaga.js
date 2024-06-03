import { takeLatest, call, put } from 'redux-saga/effects';
import fetchProducts from '../Services/allProducstapiCall';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsError, GET_PRODUCTS } from '../Slice/userSlice';
import { GET_ALL_PRODUCTS } from '../Services/constants';

function* fetchProductsSaga() {

  try {
    const products = yield call(fetchProducts);
    console.log(products)
    yield put(fetchProductsSuccess());
  } catch (error) {
    yield put(fetchProductsError(error));
  }
}

export function* watchProductsSaga() {
  yield takeLatest(fetchProductsSuccess.type, fetchProductsSaga)
}