'use strict';

import './styles/_basic.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// React router
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import persistStore from 'redux-phoenix' // localstorage store;

import configureStore, { history } from './store/configureStore';
import App from "./containers/app";

const rootEl = document.getElementById('root');

const store = configureStore();

/*persistStore(store).then(store => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
});*/
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>,
        rootEl
    )
};

render();

if (module.hot) {
    module.hot.accept();
    //module.hot.accept('./containers/app', render());
}

// Are we in development mode?
/*if (module.hot) {
    // Whenever a new version of App.js is available
    module.hot.accept('./containers/app', function () {
        // Require the new version and render it instead
        let NextApp = require('./containers/app');
        ReactDOM.render(<NextApp />, rootEl)
    })
}*/
