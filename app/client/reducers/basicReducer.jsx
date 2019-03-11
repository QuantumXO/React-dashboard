'use strict';

import { CHANGE_MENU_STATE } from '../constans/actionTypes'

const initialState = {

    author: 'CVTMEDOWN',
    version: 'v2',
    dateOfStart: '01/03/2019',
    menuLinksHide: false,

};

export default function basicReducer(state = initialState, action) {

    switch (action.type){

        case CHANGE_MENU_STATE:
            console.log(action);
            return{
                ...state,
                    menuLinksHide: action.payload
                };

        default:
            return state;

    }



}


