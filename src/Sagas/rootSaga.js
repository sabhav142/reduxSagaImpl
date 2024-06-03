import { all, fork } from "redux-saga/effects"
import { watchProductsSaga } from "./userSaga"

const rootSaga =function* (){
    yield all([
        fork(watchProductsSaga)
    ])
}

export default rootSaga;