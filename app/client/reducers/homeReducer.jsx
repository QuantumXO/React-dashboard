'use strict';

import {
    REQUEST_FAILED,
    GET_NEW_USERS_LIST,
    GET_PENDING_REVIEWS_LIST
} from "./../constans/actionTypes";

const initialState = {
    error: '',
    randomNewUsers: [],
    pendingReviews: [],
};

export default function homeReducer(state = initialState, action) {

    switch (action.type){

        case GET_NEW_USERS_LIST: // REQUEST_SUCCESS

            return {
                ...state,
                randomNewUsers: [...action.data.data.results],
            };

        case GET_PENDING_REVIEWS_LIST: // REQUEST_SUCCESS

            return {
                ...state,
                pendingReviews: [...action.data.data.results],
            };

        case REQUEST_FAILED:
            return {
                ...state,
                error: action.error // ...
            };


        default:
            return state;

    }


}