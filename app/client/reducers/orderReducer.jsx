'use strict';

import {DELETE_ORDER, GET_ORDER_DATA} from "./../constans/actionTypes"

import {orders} from './../data/orders.json'

const initialState = {
    //orders: orders,
    //order: {},
    delivery: "7.62",
    texRate: "20", // 20%
};

export default function orderReducer(state = initialState, action) {

    switch (action.type) {

        /*case GET_ORDER_DATA:

            const orderData = state.orders.filter(item => item.id == action.orderId);

            return {
                ...state,
                order: {...orderData[0]}
            };*/

        case DELETE_ORDER:

            //let deletedItemsArr = [];

            //deletedItemsArr[action.orderId] = action.orderId;

            //sessionStorage.setItem('deletedOrders', JSON.stringify(deletedItemsArr));

            return {location: '/orders'};

        default:
            return state;

    }
}
