import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default (rootReducer, rootSaga) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleWare();

  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
