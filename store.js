import {applyMiddleware, createStore, compose} from 'redux';
import Thunk from 'redux-thunk';
import {createNetworkMiddleware} from 'react-native-offline';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './src/reducers';

const networkMiddleware = createNetworkMiddleware();

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['network'],
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...[networkMiddleware, Thunk])),
);

export const persistor = persistStore(store);

//export default store;
