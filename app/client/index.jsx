'use strict';

import './styles/_basic.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
// React router
//import { HashRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import persistStore from 'redux-phoenix' // localstorage store

import configureStore, { history } from './store/configureStore'
import App from "./containers/app";

const store = configureStore();

persistStore(store).then(store => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
});

if (module.hot) {
    module.hot.accept();
}