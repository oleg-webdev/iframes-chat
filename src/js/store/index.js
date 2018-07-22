import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import clientsReducer from './clients/reducer';
// import crashReporter from './middleware/crashReporter';

const rootReducer = combineReducers({
  clientsReducer,
});

/* eslint-disable no-underscore-dangle */
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

// add middlwares in applyMiddleware func as an argument if needed
export default createStore(rootReducer, composedEnhancers(applyMiddleware(thunk)));
