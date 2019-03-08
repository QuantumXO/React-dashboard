
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch, BrowserRouter} from 'react-router-dom'

import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import { createLogger } from 'redux-logger'

import * as menuStateAction from './actions/menuStateAction';


import '../css/styles.sass'

import Header from './components/header/index'
import Aside from './components/aside/index'
import Footer from './components/footer/index'
import Home from './components/home/index'
import Customers from './components/customers/index'

const logger = createLogger()
const store = createStore(rootReducers, applyMiddleware(logger));

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/customers' component={Customers} />
    </Switch>
  </main>
);

// The Header creates links that can be used to navigate
// between routes.

class App extends Component {
	constructor(props){
		super(props);
	
		this.state = {

		}

	}

	render(){
	    console.log();
		return(
			<div>
				<Header />
				<Aside />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App;

function mapStateToProps(state){
    return {
        basic: state.basicReducer
    }
}

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));




