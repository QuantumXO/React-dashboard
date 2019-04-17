'use strict';

import {
    GET_CUSTOMERS_LIST,
} from "../constans/actionTypes";

const initialState = {

    searchFields: [
        {id: 0, name: 'search', show: true, value: '', title: 'search'},
        {id: 1, name: 'customer', show: false, value: '', title: 'customer'},
        /*{id: 2, name: 'passedSince', show: false, value: '', title: 'passed Since'},
         {id: 3, name: 'passedBefore', show: false, value: '', title: 'passed Before'},
         {id: 4, name: 'minAmount', show: false, value: '', title: 'min Amount'},*/
        {id: 5, name: 'returned', show: false, value: '', title: 'returned'},
        {id: 6, name: 'status', show: false, value: '', title: 'status'},
    ],

    customersList: null,
    checkedAll: false,
    checkedItems: [],
};


export default function customersReducer(state = initialState, action) {
    switch (action.type){

        case GET_CUSTOMERS_LIST:

            return {
                ...state,
                customersList: action.data.data.results
            };

        default:
            return state;
    }

}