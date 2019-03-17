'use strict';

import { GET_ORDER_DATA, IS_LOADING } from '../../constans/actionTypes'

export function getOrderData(id){
    return {
        type: GET_ORDER_DATA,
        orderId: id
    }
}