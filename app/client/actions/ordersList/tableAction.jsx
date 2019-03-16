

import { HANDLE_CHECK_ALL, HANDLE_CHECK_ITEM, DELETE_ITEM } from '../../constans/actionTypes'

export function handleCheckAll(state){
    return {
        type: HANDLE_CHECK_ALL,
        checkAll: state
    }
}

export function handleCheckItem(state){
    return {
        type: HANDLE_CHECK_ITEM,
        checkedItem: state
    }
}

export function deleteItem(){
    return {
        type: DELETE_ITEM,
        delete: 1
    }
}