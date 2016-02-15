/// <reference path="typings/tsd.d.ts" />

import 'reset-css/reset.css';
import 'contacts-mvc-css/index.css';

import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/app';
import store from './store/store';

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

