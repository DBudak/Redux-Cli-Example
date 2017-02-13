import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import data from './dummy.js';

const rootReducer = combineReducers({
    data,
    routing: routerReducer
});

export default rootReducer;