'use strict';

import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import homeReducer from './homeReducer';
import basicReducer from './basicReducer';
import orderReducer from './orderReducer';
import loginReducer from './loginReducer';
import ordersReducer from './ordersReducer';
import customersReducer from './customersReducer';

export default (history) => combineReducers({
    basicReducer,
    ordersReducer,
    orderReducer,
    homeReducer,
    customersReducer,
    loginReducer,
    router: connectRouter(history),
});











