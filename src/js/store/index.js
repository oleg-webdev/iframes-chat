import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import clientsReducer from './clients/reducer';

const rootReducer = combineReducers({
  clientsReducer,
});

/* eslint-disable no-underscore-dangle */
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default createStore(rootReducer, composedEnhancers(applyMiddleware(thunk)));
