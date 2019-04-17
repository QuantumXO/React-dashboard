
import axios from "axios";

import {isLoading, requestFailed} from "../basic/basicAction";

import { GET_CUSTOMERS_LIST } from '../../constans/actionTypes';

export function getData(url){

    return (dispatch) => {

        dispatch(isLoading(true));

        axios.get(url)

            .then(function (data) {

                dispatch(getCustomersList(data));

                dispatch(isLoading(false));

            })

            .catch(function (error) {

                dispatch(requestFailed(error));

                dispatch(isLoading(false));

            })

    }
}

export function getCustomersList(data) {
    return {
        type: GET_CUSTOMERS_LIST,
        data
    };
}
