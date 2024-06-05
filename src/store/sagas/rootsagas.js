
import { watcherGetAllProductsSaga, watcherGetProductsByIdSaga } from "./productSaga";
import { fork ,all} from "redux-saga/effects";

export default function* rootSaga(){
    yield all([
        fork(watcherGetAllProductsSaga),
        fork(watcherGetProductsByIdSaga)
    ])
}