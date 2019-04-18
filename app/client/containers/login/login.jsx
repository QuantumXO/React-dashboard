'use strict';

import './_login.sass';

import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';


class Login extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="login__wrap">

            </div>
        )
    }
}

export default Login