

import { combineReducers } from 'redux'
import basicReducer from './basicReducer'
import ordersReducer from './ordersReducer'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
    basicReducer,
    ordersReducer,
    routing: routerReducer
})