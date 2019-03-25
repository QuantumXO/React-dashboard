
import {CHANGE_MENU_STATE, IS_LOADING, REQUEST_FAILED, REQUEST_SUCCESS} from "../../constans/actionTypes"

export function changeMenuState(state){
    return {
        type: CHANGE_MENU_STATE,
        payload: state
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
