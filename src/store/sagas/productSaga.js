import { put, takeLatest } from "redux-saga/effects";
import { listProducts, listProductsById } from "../../Services/Products";
import { failedToGetAllProducts, failedToGetProductById, requestToGetAllProducts, requestToGetProductsById, responseToGetAllProducts, responseToGetProductById } from "../productSlice";

export function* getAllProductsSaga(action) {
    try {
        const addresponse = yield listProducts(action?.payload)

        const { status, data } = addresponse;

        if (status === 200) {
            yield put(responseToGetAllProducts(data))
        }
        else {
            yield put(failedToGetAllProducts());
        }
    } catch (error) {
        yield put(failedToGetAllProducts())
    }
}

export function* watcherGetAllProductsSaga() {
    yield takeLatest(requestToGetAllProducts.type, getAllProductsSaga)
}

export function* getProductByIdSaga(action) {
    try {
        const addResponse = yield listProductsById(action?.payload)

        const { status, data } = addResponse;

        if (status === 200) {
            yield put(responseToGetProductById(data))
        }
        else {
            yield put(failedToGetProductById());
        }
    } catch (error) {
        yield put(failedToGetProductById())
    }
}

export function* watcherGetProductsByIdSaga() {
    yield takeLatest(requestToGetProductsById.type, getProductByIdSaga)
}