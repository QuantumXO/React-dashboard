
import { CHANGE_MENU_STATE, IS_LOADING } from '../../constans/actionTypes'

export function changeMenuState(state){
    return {
        type: CHANGE_MENU_STATE,
        payload: state
    }
}

/*export function isLoading(state){
    return {
        type: IS_LOADING,
        loading: state
    }
}*/

