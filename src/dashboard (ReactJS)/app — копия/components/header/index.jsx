
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { indexAction } from '../../actions'  /// actionCreators
import * as menuStateAction from '../../actions/menuStateAction';


function matchDispatchToProps(dispatch) {
    return bindActionCreators(menuStateAction, dispatch)
}

function mapStateToProps(state){
    return {
        basic: state.basicReducer
    }
}

class HeaderMenuBtn extends Component{
	constructor(props){
		super(props);
		
	}
	handleClick(){
		
		
	}

	
	render(){
		
		return(
			<span className="header__menu-show clearfix"><svg width='24' height='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g></svg></span>
		)
	}
}

class Header extends Component{
	constructor(props){
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
		this.state = {

		};

		this.handleClick = this.handleClick.bind(this);

	}
	
	handleClick(){

		menuStateAction('00');
		
	    const menu = document.querySelectorAll('.aside__menu-link span');

	    for(let i=0; i<menu.length; i++){
	    	menu[i].classList.toggle('hide');
		}

	}

	render(){
		const { menuStateAction } = this.props.menuStateAction;
		return(
			<header>
				<div className="header__block">
					<HeaderMenuBtn menuStateAction={menuStateAction} onClick={this.handleClick}/>
					<h1 className='header__title'>CVTMEDOWN Admin Panel</h1>
				</div>
				<div className="header__block">
					<span className="header__logOut">
						<svg focusable="false" viewBox="0 0 24 24" width='24' height='24' aria-hidden="true"><g><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g></svg>
						Logout
					</span>
				</div>
			</header>
		)
	
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Header)


