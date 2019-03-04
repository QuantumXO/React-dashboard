'use strict';

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './../reducers/rootReducer'

export default function configureStore() {
    const logger = createLogger();

    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, logger));

    return store;
}






