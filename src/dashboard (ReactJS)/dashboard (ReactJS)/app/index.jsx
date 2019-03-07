
// React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// React router
import { Router, BrowserRouter } from 'react-router-dom'

// Sass
import '../css/styles.sass'

// Logger
import logger from 'redux-logger'
// Store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
const store = createStore(rootReducer, applyMiddleware(logger));
// Reducers
import rootReducer from './reducers/rootReducer.jsx'
// Containers
import App from './containers/app'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);



