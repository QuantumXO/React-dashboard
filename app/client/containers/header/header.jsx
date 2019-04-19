'use strict';

import './_header.sass'

import React, {Component} from 'react'
// Redux
import { bindActionCreators } from 'redux'
// Store
import { connect } from 'react-redux'

import * as basicAction from '../../actions/basic/basicAction'
import * as loginAction from '../../actions/login/loginAction'

import LogOutBtn from './../../components/header/logOutBtn'

class Header extends Component{

    constructor(props){
        super(props);

        this.handleMenuState = this.handleMenuState.bind(this);

    }

    handleMenuState(){

        this.props.basicAction.changeMenuState(!this.props.basicProps.menuLinksHide);

    }

    render(){
        return(
            <header>
                <div className="header__block">
                    <span className="header__menu-show" onClick={this.handleMenuState}>
                        <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </span>
                    <h1 className="header__title">{this.props.basicProps.author} Admin Panel</h1>
                </div>
                <LogOutBtn logOutFunc={this.props.loginAction.login} />
            </header>
        )
    }

}

function mapStateToProps (state) {
    return {
        basicProps: state.basicReducer
    }
}

function mapDispatchToProps (dispatch) {
    return {
        basicAction: bindActionCreators(basicAction, dispatch),
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)