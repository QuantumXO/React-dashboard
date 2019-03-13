

import { CHANGE_FILTER_FIELD_STATE, HIDE_FILTER_FIELDS } from '../../constans/actionTypes'

export function changeFilterFieldState(field){
    return {
        type: CHANGE_FILTER_FIELD_STATE,
        field: {
            name: field.name,
            show: field.show
        }
    }
}

export function hideFilterFields(state){
    return {
        type: HIDE_FILTER_FIELDS,
        hide: state
    }
}