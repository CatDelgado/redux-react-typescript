/// <reference path="typings/tsd.d.ts" />

import 'reset-css/reset.css';
import 'contacts-mvc-css/index.css';

import * as React from 'react';
import {render} from 'react-dom';

import TEMPLATE from './template';

render(TEMPLATE, document.getElementById('root'));

