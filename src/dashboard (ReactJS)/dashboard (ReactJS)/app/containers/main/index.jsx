// React
import React, { Component } from 'react'

// Store
import { connect } from 'react-redux'

// Containers
import Routes from "../../routes"

class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <main>
                <Routes />
            </main>
        )
    }
}

function mapStateToProps (state) {
    return {
        basic: state.basicReducer,
    }
}

export default (Main)