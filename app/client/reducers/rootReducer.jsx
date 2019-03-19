'use strict';

import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import basicReducer from './basicReducer'
import ordersReducer from './ordersReducer'
import orderReducer from './orderReducer'

export default (history) => combineReducers({
    basicReducer,
    ordersReducer,
    orderReducer,
    router: connectRouter(history),
});











