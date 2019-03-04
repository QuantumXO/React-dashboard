'use strict';

import './styles/_basic.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
// React router
import { Router, BrowserRouter } from 'react-router-dom'

import configureStore from './store/configureStore'
import App from "./containers/app";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


if (module.hot) {
    module.hot.accept();
}