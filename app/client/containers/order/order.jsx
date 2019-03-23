'use strict';

import './_order.sass';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import React, {PureComponent, Component} from 'react';

import * as orderAction from '../../actions/order/orderAction';
import * as basicAction from "../../actions/basic/basicAction";

import Preloader from "../ordersList/ordersList";
import Button from './../../components/default/button';
import DeleteConfirm from './../../components/order/deleteConfirm';
import DataTable from './../../components/order/dataTable';

class Order extends PureComponent{

    constructor(props, context){
        super(props, context);

        const order = this.props.orderProps.order;

        this.state = {
            orderData: order,
            listShow: false,
            currentStatus: '',
            newStatus: '',
            deleteState: false,
        };

        this.deleteOrder = this.deleteOrder.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleListState = this.handleListState.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleDeleteState = this.handleDeleteState.bind(this);

        this.getListRef = React.createRef();
    }

    deleteOrder(){
        this.setState({deleteState: true});
    }

    handleOutsideClick(e){
        const target = e.target;
        const domNode = ReactDOM.findDOMNode(this.getListRef.current);

        if ((!domNode || !domNode.contains(target)) && !target.classList.contains('status-inner')){
            this.setState({listShow: false});
        }
    }

    handleDeleteState(){
        this.setState({deleteState: false});
    }

    handleStatus(e){
        const targetValue = e.target.innerHTML;

        this.setState({
            newStatus: targetValue,
            listShow: false,
        });

    }

    handleListState(){
        this.setState({listShow: !this.state.listShow});
    }

    componentDidMount(){

        document.body.addEventListener('click', this.handleOutsideClick, false);

        const orderId = this.props.match.params.id;

        this.props.orderAction.getOrderData(orderId);

    }
    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleOutsideClick, false);
    }

    componentDidUpdate(prevProps) {

        const {order, location} = this.props.orderProps;

        if(prevProps.order !== order) {
            this.setState({
                orderData: order,
                currentStatus: order.status,
            });

        }
    }

    render(){
        const {reference, date, customer, status, id} = this.state.orderData;
        const statusesListArr = ['delivered', 'ordered', 'cancelled'];

        const statusesList = statusesListArr.filter(item => {
            if(this.state.newStatus){
                return item !== this.state.newStatus;
            }
            else{
                return item !== this.state.currentStatus;
            }
        }).map((item, i) => (
            <li key={i} className="order__status__item"><span>{item}</span></li>
        ));

        if(this.state.deleteState){
            return(
                <DeleteConfirm
                    id={id}
                    deleteOrderFunc={this.props.orderAction.deleteOrder}
                    handleDeleteStateFunc={this.handleDeleteState}
                />
            )
        }

        return(
            <div className='order__wrap clearfix'>
                <Helmet>
                    <title>Order № {this.props.match.params.id}</title>
                </Helmet>

                <div className="order__header">
                    <h2 className="order__header__title">Order #{reference}</h2>
                    <div className="order__header__settings">
                        <div className="order__header__inner">

                            <Button
                                type="link"
                                iconName="list"
                                content="list"
                                linkTo="/orders"
                                classes={'default__btn'}
                            />

                            <Button
                                iconName="delete"
                                content="delete"
                                handleClickFunc={this.deleteOrder}
                                classes={'default__btn delete'}
                            />

                            <Button
                                iconName="refresh"
                                content="refresh"
                                handleClickFunc={this.refresh}
                                classes={'default__btn refresh'}
                            />

                        </div>
                    </div>
                </div>
                <div className="order__inner">
                    <div className="order__edit">
                        <div className="order__edit__block clearfix">
                            <label>date</label>
                            <input type="text" className='order__edit__field' value={date || ''} readOnly />
                        </div>

                        <div className="order__edit__block clearfix">
                            <label style={{left: '-4px'}}>customer</label>
                            <input type="text" className='order__edit__field' value={customer || ''} readOnly />
                        </div>

                        <div className="order__edit__block clearfix">
                            <label style={{left: '-1px'}}>status</label>

                            <div className="order__edit__field status-inner" onClick={this.handleListState}>
                                <span style={{marginLeft: '0'}}>{this.state.newStatus ? this.state.newStatus : status}</span>
                                <input type="hidden" value={this.state.newStatus ? this.state.newStatus : (status || '')} onChange={this.forFixErrMsg} />
                                <svg className={this.state.listShow ? "arrow active" : "arrow"} width='24' height='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7 10l5 5 5-5z" />
                                </svg>
                            </div>

                            <ul
                                role="menu"
                                ref={this.getListRef}
                                onClick={this.handleStatus}
                                className={"order__status__list" + (this.state.listShow ? " show" : "")}
                            >
                                {statusesList}
                            </ul>

                        </div>

                        {this.state.newStatus &&
                            (
                                <div className="order__edit__footer">
                                    <Button
                                        iconName="save"
                                        content="save"
                                        handleClickFunc={this.refresh}
                                        classes={'default__btn save'}
                                    />
                                </div>
                            )
                        }

                    </div>

                    <DataTable orderData={this.state.orderData} orderProps={this.props.orderProps} />
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        orderProps: state.orderReducer,
        isLoading: state.basicReducer.isLoading,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        basicAction: bindActionCreators(basicAction, dispatch),
        orderAction: bindActionCreators(orderAction, dispatch),
    }
}

Order.propTypes = {
    //isLoading: PropTypes.boolean,
    orderProps: PropTypes.shape({
        texRate: PropTypes.number,
        delivery: PropTypes.number,
        order: PropTypes.shape({
            customer: PropTypes.string,
            id: PropTypes.number,
            total: PropTypes.number,
            status: PropTypes.string,
            nbItems: PropTypes.number,
            date: PropTypes.string,
        }),
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Order)