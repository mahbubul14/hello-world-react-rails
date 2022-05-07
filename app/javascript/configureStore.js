import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingsReducer from './redux/greetingsReducer';

const middleWares = [thunk, logger];
const reducer = combineReducers({
  greetingsReducer,
});

const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;
