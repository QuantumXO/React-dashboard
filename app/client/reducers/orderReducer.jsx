'use strict';

import { GET_ORDER_DATA } from "./../constans/actionTypes"

import {orders} from './../data/orders.json'

const initialState = {
    orders: orders,
    order: {}
};

export default function orderReducer(state = initialState, action) {

    switch (action.type) {

        case GET_ORDER_DATA:

            const orderData = state.orders.filter(item => item.id == action.orderId);

            return {
                ...state,
                order: {...orderData[0]}
            };

        default:
            return state;

    }
}
