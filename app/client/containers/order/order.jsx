'use strict';

import './_order.sass';

import React, {PureComponent, Component} from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import * as orderAction from '../../actions/order/orderAction';
import * as basicAction from "../../actions/basic/basicAction";

import Preloader from "../ordersList/ordersList";
import Button from './../../components/default/button';

class Order extends PureComponent{

    constructor(props, context){
        super(props, context);

        this.state = {
            isLoading: this.props.basicProps,
            orderData: this.props.orderProps.order,
            listShow: false,
            statusValue: '',
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

        if(this.state.deleteState){
            this.props.orderAction.deleteOrder(this.state.orderData.id);
        }else{
            this.setState({deleteState: true});
        }
    }

    handleOutsideClick(e){
        const target = e.target;

        const domNode = ReactDOM.findDOMNode(this.getListRef.current);

        if (!domNode || !domNode.contains(target)){
            this.setState({listShow: false});
        }
    }

    handleDeleteState(){
        this.setState({deleteState: false});
    }

    handleStatus(e){

        const targetValue = e.target.innerHTML;

        this.setState({
            statusValue: targetValue,
            listShow: false
        });

    }

    handleListState(){
        this.setState({listShow: !this.state.listShow});
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleOutsideClick, false);
    }

    componentDidMount(){

        document.body.addEventListener('click', this.handleOutsideClick, false);

        const orderId = this.props.match.params.id;

        this.props.orderAction.getOrderData(orderId);

    }
    componentDidUpdate(prevProps) {

        const {order, location} = this.props.orderProps;

        if(prevProps.order !== order) {
            this.setState({
                orderData: order,
            });

        }
    }

    render(){

        const {reference, date, customer, status, total, nbItems, id} = this.state.orderData;
        const {delivery, texRate} = this.props.orderProps;
        const endSum = Number(total) + Number(delivery) + (Number(total) * (Number(texRate) / 100));

        if(this.state.isLoading){
            return(
                <Preloader />
            )
        }

        if(this.state.deleteState){
            return(
                <div className='order__wrap clearfix'>

                    <Helmet>
                        <title>Delete Order # {this.props.match.params.id}</title>
                    </Helmet>
                    <div className="order__header">
                        <h2 className="order__header__title">Delete Order #{id}</h2>
                        <div className="order__header__settings">
                            <div className="order__header__inner">

                                <Button
                                    type="link"
                                    iconName="list"
                                    content="list"
                                    redirectTo="/orders"
                                    handleClickFunc={this.linkToOrdersList}
                                    classes={'default__btn'}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="order__inner">
                        <p>Are you sure ?</p>

                        <div className="order__inner__footer">

                            <Button
                                type="link"
                                iconName="success"
                                content="delete"
                                redirectTo="/orders"
                                handleClickFunc={this.deleteOrder}
                                classes={'default__btn success'}
                            />

                            <Button
                                iconName="cancel"
                                content="cancel"
                                handleClickFunc={this.handleDeleteState}
                                classes={'default__btn cancel'}
                            />

                        </div>
                    </div>

                </div>
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
                                redirectTo="/orders"
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
                                <span style={{marginLeft: '0'}}>{this.state.statusValue ? this.state.statusValue : status}</span>
                                <input type="hidden" value={this.state.statusValue ? this.state.statusValue : (status || '')} onChange={this.forFixErrMsg} />
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
                                <li className="order__status__item"><span>delivered</span></li>
                                <li className="order__status__item"><span>ordered</span></li>
                                <li className="order__status__item"><span>cancelled</span></li>
                            </ul>

                        </div>

                    </div>

                    <table className="order__data">
                        <thead>
                            <tr>
                                <th scope="col">Reference</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{reference}</td>
                                <td>{total / nbItems}&nbsp;$</td>
                                <td>{nbItems}</td>
                                <td>{total}&nbsp;$</td>
                            </tr>

                            <tr>
                                <td />
                                <td />
                                <td>Sum</td>
                                <td>{total}&nbsp;$</td>
                            </tr>

                            <tr>
                                <td />
                                <td />
                                <td>Delivery</td>
                                <td>{delivery}&nbsp;$</td>
                            </tr>

                            <tr>
                                <td />
                                <td />
                                <td>Tax Rate</td>
                                <td>{texRate}&nbsp;%</td>
                            </tr>

                            <tr className="total-sum">
                                <td />
                                <td />
                                <td>Total</td>
                                <td>{endSum.toFixed(2)}&nbsp;$</td>
                            </tr>
                        </tbody>

                    </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order)