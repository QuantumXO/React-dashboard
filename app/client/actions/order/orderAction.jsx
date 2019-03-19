'use strict';

import { GET_ORDER_DATA, DELETE_ORDER } from '../../constans/actionTypes'

export function getOrderData(id){
    return {
        type: GET_ORDER_DATA,
        orderId: id
    }
}

export function deleteOrder(id){
    return {
        type: DELETE_ORDER,
        orderId: id
    }
}