'use strict';

import React, {PureComponent} from 'react'
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as orderAction from '../../actions/order/orderAction'
import * as basicAction from "../../actions/basic/basicAction";

class Order extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            orderData: this.props.orderProps.order || {},
        }

    }

    componentDidMount(){

        const orderId = this.props.match.params.id;

        this.props.orderAction.getOrderData(orderId);
    }

    componentDidUpdate(prevProps) {

        const {order} = this.props.orderProps;

        if(prevProps.order !== order) {
            this.setState({orderData: order}, function () {
                //console.log('this.state.orderData.id: ', this.state.orderData);
            });
        }

    }

    render(){

        //this.state.orderData;
        console.log(this.state.orderData);

        return(
            <div>
                <Helmet>
                    <title>Order № {this.props.match.params.id}</title>
                </Helmet>
                Order.jsx
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        orderProps: state.orderReducer,
        basicProps: state.basicReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        basicAction: bindActionCreators(basicAction, dispatch),
        orderAction: bindActionCreators(orderAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)