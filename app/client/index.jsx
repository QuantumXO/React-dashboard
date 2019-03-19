'use strict';

import './styles/_basic.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
// React router
import { BrowserRouter } from 'react-router-dom'
import persistStore from 'redux-phoenix' // localstorage store

import configureStore from './store/configureStore'
import App from "./containers/app";

const store = configureStore();

persistStore(store).then(store => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
});

if (module.hot) {
    module.hot.accept();
}