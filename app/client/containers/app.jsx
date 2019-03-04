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

    }

    render(){
        return(
            <div className='app-wrap' >
                <Header />
                <div className="main-wrapper">
                    <Aside />
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
        basicData: state.basicReducer
    }
}

function mapDispatchToProps (dispatch) {
    return {
        //fetchAction: bindActionCreators(fetchAction, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))









