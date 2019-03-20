'use strict';

import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import basicReducer from './basicReducer'
import ordersReducer from './ordersReducer'
import orderReducer from './orderReducer'
import homeReducer from './homeReducer'

export default (history) => combineReducers({
    basicReducer,
    ordersReducer,
    orderReducer,
    homeReducer,
    router: connectRouter(history),
});











