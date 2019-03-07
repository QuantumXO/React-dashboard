import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from './menu'
import {menuState} from "../../actions";

function matchDispatchToProps(dispatch) {
    return bindActionCreators(menuState, dispatch)
}

function mapStateToProps(state){
    return {
        basic: state.basicReducer
    }
}

class Aside extends Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<aside>
				{this.props.basic.menuShow ? <Menu /> : ''}
			</aside>

		)
	
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Aside)