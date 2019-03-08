

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';;

function mapStateToProps(state){
    return {
        basic: state.basic
    }
}

class Footer extends Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return(
		  <footer></footer>
		)
	
	}
}

export default connect(mapStateToProps)(Footer)