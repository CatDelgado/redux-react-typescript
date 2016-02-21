/// <reference path="typings/tsd.d.ts" />

import 'reset-css/reset.css';
import 'contacts-mvc-css/index.css';

import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
// import { syncHistory, routeReducer } from 'react-router-redux'

import App from './containers/app';
import store from './store/store';

const app = (
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>
</Provider>
);

render(app, document.getElementById('root'));

