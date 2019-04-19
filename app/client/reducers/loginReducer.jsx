'use strict';

import {CVTMEDOWN_LOG_IN, LOG_IN, LOG_OUT} from "./../constans/actionTypes";

const getLogInStatus = localStorage.getItem(CVTMEDOWN_LOG_IN);

const initialState = {
    login: getLogInStatus || false
};

export default function orderReducer(state = initialState, action) {

    switch (action.type) {

        case LOG_IN:
            return {
                ...state,
                login: action.payload
            };

        default:
            return state;
    }

}