
import axios from 'axios'

import { GET_NEW_USERS_LIST, GET_PENDING_REVIEWS_LIST} from '../../constans/actionTypes';
import {isLoading, requestFailed} from './../basic/basicAction';

/*
 * GET HOME DATA solo func
 */

export function getData(url, type){

    console.log('type: ', type);

    return (dispatch) => {

        dispatch(isLoading(true));

        axios.get(url)

            .then(function (data) {

                switch (type) {
                    case 'users':
                        dispatch(getNewUsersList(data));

                    case 'pendingReviews':
                        dispatch(getPendingReviewsList(data));
                }

                dispatch(isLoading(false));

            })

            .catch(function (error) {

                dispatch(requestFailed(error));

                dispatch(isLoading(false));

            })

    }
}


export function getNewUsersList(data) {
    return {
        type: GET_NEW_USERS_LIST,
        data
    };
}

export function getPendingReviewsList(data) {
    return {
        type: GET_PENDING_REVIEWS_LIST,
        data
    };
}
