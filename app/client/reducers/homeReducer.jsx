'use strict';

import { IS_LOADING, REQUEST_SUCCESS, REQUEST_FAILED } from '../constans/actionTypes';

const initialState = {
    randomNewUsers: [],
    error: '',
    isLoading: true
};

export default function homeReducer(state = initialState, action) {

    switch (action.type){

        case IS_LOADING:

            return {
                ...state,
                isLoading: true
            };

        case REQUEST_FAILED:

            return {
                ...state,
                isLoading: false
            };

        case REQUEST_SUCCESS:

            console.log('action: ', action.data.data.results);
            return {
                ...state,
                randomNewUsers: [...action.data.data.results],
                isLoading: false
            };

        default:
            return state;

    }


}