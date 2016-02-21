import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistory, routeReducer} from 'react-router-redux';
import {assign} from 'lodash';

import mainReducer from '../reducers/index';
import {initialState} from '../reducers/index';

const reducer = combineReducers(assign({}, mainReducer, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);


export default createStore(mainReducer, initialState);
