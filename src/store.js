import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {productsSaga, watchProductsSaga} from './Sagas/userSaga'
import productsSlice from './Slice/userSlice'
import { all } from 'redux-saga/effects'
import rootReducers from './rootReducer'
import rootSaga from './Sagas/rootSaga'



const sagaMiddleware = createSagaMiddleware()
const store =configureStore({   
    reducer:rootReducers,
    middleware: ()=> [sagaMiddleware],
})


sagaMiddleware.run(rootSaga)
        
export default store