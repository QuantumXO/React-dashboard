'use strict';

import { combineReducers } from "redux";

import basicReducer from './basicReducer'
import ordersReducer from './ordersReducer'

export default combineReducers({
    basicReducer,
    ordersReducer
});











