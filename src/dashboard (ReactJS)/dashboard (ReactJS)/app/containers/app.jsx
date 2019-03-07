
// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// Store
import { connect } from 'react-redux';

// Reducers
import { rootReducer } from '../reducers/rootReducer'
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Aside from "./aside";
import Login from "./login";
import { bindActionCreators } from "redux";
import * as authAction from "../actions/authAction";

// Containers

class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
       if(this.props.basic.isAuth || sessionStorage['isAuth']){
           return(
               <div className={'clearfix'}>
                   <Header />
                   <div className='flex__container'>
                       <Aside />
                       <Main />
                   </div>
                   <Footer />
               </div>
           )
       }else{
           return(
               <Login basic={this.props.basic} authAction={authAction}/>
           )
       }

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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

