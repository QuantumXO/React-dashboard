'use strict';

import {GET_ORDER_DATA, DELETE_ORDER, SET_NEW_ORDER_STATUS, GET_NEW_USERS_LIST} from "../../constans/actionTypes"
import {isLoading, requestFailed} from './../basic/basicAction';

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

export function setNewOrderStatus(id, status){

    return (dispatch) => {

        dispatch(isLoading(true));

        dispatch(getNewUsersListFunc(id, status));

        dispatch(isLoading(false));

    }
}


export function getNewUsersListFunc(id, status) {
    return {
        type: SET_NEW_ORDER_STATUS,
        data: {id, status}
    };
}
