'use strict';

import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import basicReducer from './basicReducer'
import ordersReducer from './ordersReducer'
import orderReducer from './orderReducer'
import homeReducer from './homeReducer'
import customersReducer from './customersReducer'

export default (history) => combineReducers({
    basicReducer,
    ordersReducer,
    orderReducer,
    homeReducer,
    customersReducer,
    router: connectRouter(history),
});











