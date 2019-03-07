// React
import React, { Component } from 'react'
import * as authAction from "../../actions/authAction";
import { bindActionCreators } from "redux";
// Store
import { connect } from 'react-redux';

function shake(el){
    el.parentNode.classList.add('shake');
    let timerId = setTimeout(function(){
        el.parentNode.classList.remove('shake');
    }, 830)
}

class Login extends Component{
    constructor(props){
        super(props);

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login__body');

        this.state = {
            loginError: '',
            PasswordError: '',
        }
    }

    loginSubmit(e){
        e.preventDefault();

        const login = document.getElementById('login');
        const password = document.getElementById('password');

        this.setState({
            loginError: '',
            passwordError: '',
        });

        if(login.value !== ''){
            if(login.value == this.props.basic.login){
                login.classList.remove('input__error');
                if(password.value !== ''){
                    if(password.value == this.props.basic.password){
                        console.log('success');
                        this.setState({
                            passwordError: ''
                        });

                        password.classList.remove('input__error');
                        const { authAction } = this.props.authAction;
                        authAction(true);
                        const body = document.getElementsByTagName('body')[0];
                        body.classList.remove('login__body');

                        sessionStorage['isAuth'] = true;

                    }else{
                        shake(password);
                        password.classList.add('input__error');
                        this.setState({
                            passwordError: 'not correct password'
                        });
                    }
                }else{
                    shake(password);
                    password.classList.add('input__error');
                    this.setState({
                        passwordError: 'password must not be empty'
                    });
                }
            }else{
                shake(login);
                this.setState({
                    loginError: 'login must be right'
                });
                login.classList.add('input__error');
            }
        }else{
            shake(login);
            login.classList.add('input__error');
            this.setState({
                loginError: 'login must not be empty'
            });
        }

    }

    handleError(e){
        if(e.target.id == 'login')
            login.classList.remove('input__error');
        else if(e.target.id == 'password')
            password.classList.remove('input__error');
    }

    render(){
        return(
            <div className='login__wrap'>
                <h1 className="login__title">welcome</h1>
                <span className="login__error">{this.state.loginError ? this.state.loginError : ''}{this.state.passwordError ? this.state.passwordError : ''}</span>

                <form className="login__form">
                    <div className="login__form-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width='10' viewBox="0 0 448 512" className='login__form-icon'>
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </svg>
                        <input type="text" className='login__input' onChange={this.handleError.bind(this)} id='login' placeholder='Login' />
                    </div>
                    <div className="login__form-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width='10' viewBox="0 0 448 512" className='login__form-icon'>
                            <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/>
                        </svg>
                        <input type="password" className='login__input' onChange={this.handleError.bind(this)} id='password' placeholder='Password' />
                    </div>
                    <input type="submit" className='login__submit' onClick={this.loginSubmit.bind(this)} value='LogIn'/>
                    <span className='login__forgot-pass'><a href="#">Forgot password?</a></span>
                </form>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        basic: state.basicReducer
    }
}

function mapDispatchToProps (dispatch) {
    return {
        authAction: bindActionCreators(authAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)