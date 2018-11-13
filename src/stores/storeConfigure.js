import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import xxReducer from '../reducers/xxxReducer';

export default () => {
    return createStore(
        combineReducers({
            xx: xxReducer
        }),
        applyMiddleware(ReduxPromise)
    );
};

