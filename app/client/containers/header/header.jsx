'use strict';

import './_header.sass'

import React, {Component} from 'react'
// Redux
import { bindActionCreators } from 'redux'
// Store
import { connect } from 'react-redux'

import basicAction from '../../actions/basic/basicAction'

import LogOutBtn from './../../components/header/logOutBtn'

class Header extends Component{

    constructor(props){
        super(props);

       /* this.state = {
            menuLinksHide: this.props.basic.menuLinksHide
        };*/

        this._handleMenuState = this._handleMenuState.bind(this);

    }

    _handleMenuState(){

       /* this.setState({
            menuHide: !this.state.menuHide
        }, () => {
            this.props.changeMenuStateFunc(this.state.menuHide);
        });*/

        this.props.basicAction(!this.props.basic.menuLinksHide);

    }

    render(){
        return(
            <header>
                <div className="header__block">
                    <span className="header__menu-show" onClick={this._handleMenuState}>
                        <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
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
        basicAction: bindActionCreators(basicAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)