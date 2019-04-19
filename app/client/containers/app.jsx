'use strict';

import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
//import {bindActionCreators} from "redux";
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'; // must be for routing!!!!!

import Header from "./header/header";
import Footer from "./footer/footer";
import Aside from "./aside/aside";

import Routes from "./../router/router";

class App extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            loggedIn: this.props.loginProps.login,
        };
    }

    componentWillUpdate(prevProps) {

        const login = this.props.loginProps.login;

        if(prevProps.login !== login) {
            this.setState({
                loggedIn: login,
            });

        }
    }

    render(){

        if(!this.state.loggedIn){
            return (
                <div className='app-wrap'>
                    <div className="flex-container">
                        <main>
                            <Routes />
                        </main>
                    </div>
                </div>
            )
        }

        return(
            <div className='app-wrap'>
                <Header />
                <div className="flex-container">
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
        loginProps: state.loginReducer,
    }
}

export default withRouter(connect(mapStateToProps, null)(App))









