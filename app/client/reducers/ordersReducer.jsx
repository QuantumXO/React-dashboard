'use strict';

import {orders} from './../data/orders.json'

import {
    HANDLE_FILTER_FIELD_STATE,
    HANDLE_CHECK_ALL,
    HANDLE_CHECK_ITEM,
    DELETE_ITEM,
} from "../constans/actionTypes"

let deletedOrders = sessionStorage.getItem('deletedOrders');

const initialState = {

    orders: orders,

    searchFields: [
        {id: 0, name: 'search', show: true, value: '', title: 'search'},
        {id: 1, name: 'customer', show: false, value: '', title: 'customer'},
        /*{id: 2, name: 'passedSince', show: false, value: '', title: 'passed Since'},
        {id: 3, name: 'passedBefore', show: false, value: '', title: 'passed Before'},
        {id: 4, name: 'minAmount', show: false, value: '', title: 'min Amount'},*/
        {id: 5, name: 'returned', show: false, value: '', title: 'returned'},
        {id: 6, name: 'status', show: false, value: '', title: 'status'},
    ],

    checkedAll: false,
    checkedItems: [],
    deletedOrdersFromStorage: deletedOrders,
};

export default function ordersReducer(state = initialState, action) {

    switch (action.type){
        case HANDLE_FILTER_FIELD_STATE:

            const field = state.searchFields.filter(item => (item.name == action.field.name));
            const newShowState = field[0].show = action.field.show;

            return {
                ...state,
                newShowState
            };

        case HANDLE_CHECK_ALL:

            const checkedAll = action.checkAll;
            const checkedItems = state.checkedItems ? state.checkedItems : [];

            if(checkedItems.length){
                return {
                    ...state,
                    checkedAll,
                    checkedItems: []
                };
            }else{
                return {
                    ...state,
                    checkedAll,
                    checkedItems
                };
            }

        case HANDLE_CHECK_ITEM:
            if(state.checkedItems.indexOf(action.checkedItem) !== -1){
                const newState = state.checkedItems.filter(item => (item != action.checkedItem));
                return {
                    ...state,
                    checkedItems: [...newState]
                };
            }else{
                return {
                    ...state,
                    checkedItems: [...state.checkedItems, action.checkedItem]
                }
            }

        case DELETE_ITEM:
            if(state.checkedAll){

                return {
                    ...state,
                    orders: [],
                    checkedAll: false
                }
            }else{
                const orders = state.orders.filter(function(item) {
                    return state.checkedItems.indexOf(item.id) < 0;
                });

                return {
                    ...state,
                    orders: orders
                }
            }

        default:

            if(deletedOrders){

                let newOrderslist = state.orders.filter(item => item.id !== deletedOrders);

                return {
                    ...state,
                    orders: newOrderslist
                };

            }else{
                return state;
            }

    }



}