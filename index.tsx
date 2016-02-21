/// <reference path="typings/tsd.d.ts" />

import 'reset-css/reset.css';
import 'contacts-mvc-css/index.css';

import {assign} from 'lodash';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {routeReducer, syncHistory} from 'react-router-redux';

import App from './containers/app';
import reducers from './reducers';

const reducer = combineReducers(assign({}, reducers, {
  routing: routeReducer
}));
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

