import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import data from './dummy';
import asyncData from './dummyFetcher';

const rootReducer = combineReducers({
    data,
    asyncData,
    routing: routerReducer
});

export default rootReducer;