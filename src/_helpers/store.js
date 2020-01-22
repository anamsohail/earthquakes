import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../_reducers';
//import initialState from './initialState';

const middlewares = [thunk];

//export default createStore(rootReducer, initialState, applyMiddleware(...middlewares));
export default createStore(rootReducer, undefined, applyMiddleware(...middlewares));