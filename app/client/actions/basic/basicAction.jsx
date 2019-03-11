
import { CHANGE_MENU_STATE } from '../../constans/actionTypes'

export default function changeMenuStateAction(state){
    return {
        type: CHANGE_MENU_STATE,
        payload: state
    }
}

