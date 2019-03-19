'use strict';

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-phoenix'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'

export const history = createBrowserHistory();
import rootReducer from './../reducers/rootReducer'

export default function configureStore(preloadedState) {
    const logger = createLogger();

    const store = createStore(
        rootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                thunk, logger, routerMiddleware(history), // for dispatching history actions
            ),
            autoRehydrate,
        )
    );

    return store;
}






