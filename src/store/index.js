import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import { persistStore, persistReducer } from 'redux-persist';
import rootSaga from "./sagas/rootsagas";
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const storeMiddleware = [sagaMiddleware];
const persistConfig = {
    key: 'root',
    storage
  };



  const appReducer =combineReducers({
    Products:productSlice,
  },)

  const rootReducer =(state,action)=>{
    return appReducer(state,action)
  }

  const persistedReducer = persistReducer(persistConfig ,rootReducer)

  const store =configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>{
            return getDefaultMiddleware({
                serializableCheck:false
            }).concat(storeMiddleware);
    }
  })

  sagaMiddleware.run(rootSaga)
  export const _persistorStore = persistStore(store)
  export default store