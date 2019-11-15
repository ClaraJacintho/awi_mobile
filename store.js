import { applyMiddleware, createStore, compose } from 'redux';
import Thunk from 'redux-thunk';
import { createNetworkMiddleware } from 'react-native-offline';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';
import reducer from './reducers';

const networkMiddleware = createNetworkMiddleware();

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(...[
            networkMiddleware,
            Thunk
        ])
    )
);

export const persistor = persistStore(
    store,
    {
        storage: storage,
        blacklist: ['network'],
        //either blacklist some keys or use `whitelist` to save only the keys you need
    }
);

export default store;