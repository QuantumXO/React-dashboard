
import axios from 'axios'

import { IS_LOADING, REQUEST_SUCCESS, REQUEST_FAILED } from '../../constans/actionTypes'

export function getRandomNewUsers(number){
    return (dispatch) => {

        dispatch(isLoading(true));

        axios.get(`https://randomuser.me/api/?results=${number}`)

            .then(function (data) {

                dispatch(isLoading(false));

                dispatch(requestSuccess(data));


            })

            .catch(function (error) {

                dispatch(isLoading(false));

                dispatch(requestFailed(error));
            })

    }
}

export function requestFailed(error) {
    return {
        type: REQUEST_FAILED,
        error
    };
}

export function isLoading(bool) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}

export function requestSuccess(data) {
    return {
        type: REQUEST_SUCCESS,
        data
    };
}