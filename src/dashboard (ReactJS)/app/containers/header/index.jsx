// React
import React, { Component } from 'react'
// Redux
import { bindActionCreators } from 'redux'
// Store
import { connect } from 'react-redux'
//Reducers

// Actions
import * as authAction from '../../actions/authAction'

class LogOutBtn extends Component{
    constructor(props){
        super(props);

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(){
        this.props.authAction(false);
        sessionStorage.removeItem('isAuth');
    }

    render(){
        return(
            <div className="header__block">
                <span className="header__logOut" onClick={this.handleAuth}>
                    <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path>
                    </svg>
                    logout
                </span>
            </div>
        )
    }
}

class Header extends Component{
    constructor(props){
        super(props);

    }
    handleMenuState(){
        let menu = document.getElementsByClassName('aside__menu-title');

        for(let i=0; i<menu.length; i++){
            menu[i].classList.toggle('hide');
        }

    }
    render(){
        const { authAction } = this.props.authAction;
        const { isAuth } = this.props.basic;
        return(
            <header>
                <div className="header__block">
                    <span className="header__menu-show" onClick={this.handleMenuState.bind(this)}>
                        <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </span>
                    <h1 className="header__title">CVTMEDOWN Admin Panel</h1>
                </div>
                <LogOutBtn isAuth={isAuth} authAction={authAction} />
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)