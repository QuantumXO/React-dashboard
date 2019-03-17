'use strict';

import { combineReducers } from "redux";

import basicReducer from './basicReducer'
import ordersReducer from './ordersReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    basicReducer,
    ordersReducer,
    orderReducer
});











