'use strict';

import './_header.sass'

import React, {Component} from 'react'
// Redux
import { bindActionCreators } from 'redux'
// Store
import { connect } from 'react-redux'

import LogOutBtn from './../../components/header/logOutBtn'

class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            menuHide: false
        }


    }

    _handleMenuState(){

        this.setState({
            menuHide: !this.state.menuHide
        }, () => {
            this.props.changeMenuStateFunc(this.state.menuHide);
        });


    }

    render(){
        return(
            <header>
                <div className="header__block">
                    <span className="header__menu-show" onClick={this._handleMenuState.bind(this)}>
                        <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </span>
                    <h1 className="header__title">{this.props.basic.author} Admin Panel</h1>
                </div>
                <LogOutBtn  />
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
        //authAction: bindActionCreators(authAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)