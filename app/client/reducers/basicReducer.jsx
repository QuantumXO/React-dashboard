'use strict';

import {CHANGE_MENU_STATE, IS_LOADING} from "../constans/actionTypes";

const initialState = {

    author: 'CVTMEDOWN',
    version: 'v2',
    dateOfStart: '01/03/2019',
    menuLinksHide: false,
    isLoading: true,

};

export default function basicReducer(state = initialState, action) {

    switch (action.type){

        case CHANGE_MENU_STATE:
            return{
                ...state,
                    menuLinksHide: action.payload
                };

        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        default:
            return state;

    }



}


