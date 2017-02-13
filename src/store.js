//Redux
import { applyMiddleware,createStore, compose } from 'redux';

//Routing
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//RootReducer
import  rootReducer from './reducers/root';

//Middleware for Async actions and logging
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


//Redux DevTools browser plugin enchancer for store
const enchancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
);

//Middleware for Async actions and logging
const loggerMiddleware = createLogger();
const middleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
);

//Routing History
export const history = syncHistoryWithStore(browserHistory, store);

//Initial State
const initialState = {
    data: { number : 1 },
    asyncData : {}
};

//Store
const store = createStore(rootReducer, defaultState, middleware, enchancers);

export default store;

