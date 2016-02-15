import {createStore} from 'redux';

import mainReducer from '../reducers/index';
import {initialState} from '../reducers/index';


export default createStore(mainReducer, initialState);
