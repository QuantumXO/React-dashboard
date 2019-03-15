

import { HANDLE_CHECK_ALL, HANDLE_CHECK_ITEM } from '../../constans/actionTypes'

export function handleCheckAll(state){
    return {
        type: HANDLE_CHECK_ALL,
        checkAll: state
    }
}

export function handleCheckItem(state){
    return {
        type: HANDLE_CHECK_ITEM,
        checkItem: state
    }
}