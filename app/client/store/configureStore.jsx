'use strict';

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-phoenix'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './../reducers/rootReducer'

export default function configureStore() {
    const logger = createLogger();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk, logger),
            autoRehydrate
        )
    );

    return store;
}






