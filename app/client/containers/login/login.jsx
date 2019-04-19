'use strict';

import './_login.sass';

import {CVTMEDOWN_LOG_IN} from "../../constans/actionTypes";

import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import Button from './../../components/default/button';
import * as basicAction from "../../actions/basic/basicAction";
import * as loginAction from "../../actions/login/loginAction";

class Login extends PureComponent{
    constructor(props){
        super(props);

        const getLogInStatus = localStorage.getItem(CVTMEDOWN_LOG_IN);

        const {defaultLogin, defaultPassword} = this.props.basicProps;

        this.state = {
            loginFieldValue: '',
            passwordFieldValue: '',
            loginIsValid: false,
            PasswordIsValid: false,
            defaultLogin: defaultLogin || 'admin',
            defaultPassword: defaultPassword || 123,
            loggedIn: getLogInStatus ? true : false,
        };

        this.login = this.login.bind(this);
        this.handleStateLoginField = this.handleStateLoginField.bind(this);
        this.handleStatePasswordField = this.handleStatePasswordField.bind(this);
    }

    login(){

        const {loginIsValid, PasswordIsValid} = this.state;

        if(loginIsValid && PasswordIsValid){

            localStorage.setItem(CVTMEDOWN_LOG_IN, 'true');

            this.setState({loggedIn: true});

            this.props.loginAction.login(true);
        }
    }

    handleStateLoginField(e){


        this.setState({loginFieldValue: e.target.value}, function () {

            const {loginFieldValue, defaultLogin} = this.state;

            if(loginFieldValue === defaultLogin){
                this.setState({loginIsValid: true});
            }else{
                this.setState({loginIsValid: false});
            }

        });


    }

    handleStatePasswordField(e){

        this.setState({passwordFieldValue: e.target.value}, function () {

            const {passwordFieldValue, defaultPassword} = this.state;

            if(passwordFieldValue === defaultPassword){
                this.setState({PasswordIsValid: true});
            }else{
                this.setState({PasswordIsValid: false});
            }

        });

    }


    render(){

        if(this.state.loggedIn){
            return <Redirect to='/' />
        }

        return(
            <div className="login__wrap">

                <Helmet>
                    <title>Login page</title>
                </Helmet>
                <div className="login__inner">
                    <h2 className="default__title">Log In</h2>
                    <p className="login__sbt">Default: admin, 123</p>

                    <div className="login__form">
                        <div className="login__form__block">
                            <input type="text" className='login__form__field' value={this.state.loginFieldValue} onChange={this.handleStateLoginField} placeholder='Login' required />
                        </div>
                        <div className="login__form__block">
                            <input type="password" className='login__form__field' value={this.state.passwordFieldValue} onChange={this.handleStatePasswordField} placeholder='Password' required />
                        </div>

                        <div className="login__form__block">

                            <Button
                                iconName="login"
                                content="login"
                                handleClickFunc={this.login}
                                classes={'default__btn login__form__btn'}
                            />

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


Login.propTypes = {

};

function mapStateToProps (state) {
    return {
        basicProps: state.basicReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        basicAction: bindActionCreators(basicAction, dispatch),
        loginAction: bindActionCreators(loginAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)