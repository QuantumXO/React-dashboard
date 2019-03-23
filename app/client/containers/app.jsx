'use strict';

import React, {Component} from 'react';
//import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // must be for routing!!!!!
//import {bindActionCreators} from "redux";

import Header from "./header/header";
import Footer from "./footer/footer";
import Aside from "./aside/aside";

import Routes from "./../router/router";

class App extends Component{

    render(){
        return(
            <div className='app-wrap' >
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

export default withRouter(App)









