'use strict';

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' // must be for routing!!!!!
import {bindActionCreators} from "redux"

import Header from "./header/header"
import Footer from "./footer/footer"
import Aside from "./aside/aside"

import Routes from "./../router/router"

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            menuLinksHide: ''
        }
    }

    _changeMenuState(state){

        this.setState({menuLinksHide: state});
    }

    render(){
        return(
            <div className='app-wrap' >
                <Header changeMenuStateFunc={this._changeMenuState.bind(this)} />
                <div className="flex-container">
                    <Aside menuLinksHide={this.state.menuLinksHide} />
                    <main>
                        <Routes />
                    </main>
                </div>
                <Footer />
            </div>
        )
    }

}

function mapStateToProps (state) {
    return {
        basicData: state.basicReducer,
        router: state.router
    }
}

function mapDispatchToProps (dispatch) {
    return {
        //fetchAction: bindActionCreators(fetchAction, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))









