// React
import React, { Component, PureComponent } from 'react'
// Router
import { Link } from 'react-router-dom'
// Store
import { connect } from 'react-redux'
// Sass
import '../../../css/_config.sass'
import './style.sass'
// Redux
import {bindActionCreators} from "redux";
// Actions
import * as deleteOrderAction from "../../actions/order/deleteOrderAction"
import * as newStatusAction from "../../actions/order/newStatusAction";


class Status extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.status
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            likesIncreasing: nextProps.status > this.props.status
        });

        if(nextProps.status !== this.props.status){
            this.props.newStatusAction({status: nextProps.status, id: this.props.id});
        }
    }

    render(){
        return(
            <div>
                <span>{this.props.order.status}</span>
                <input type="hidden" value={this.props.status} />
            </div>
        )
    }
}
class Order extends Component{
    constructor(props){
        super(props);

        this.state = {
            status: this.props.orders.ordersArr[this.props.match.params.id].status
        }
    }
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function (){
            document.addEventListener('mouseup', function (e) {

                const wrap = document.getElementsByClassName('order__inputs-block');
                const target = e.target;
                if(target.className == 'order__inputs-input'){
                    target.parentElement.classList.add('focus');
                }
               /* const el = document.getElementsByClassName('order__inputs-input');
                const elWrap = document.getElementsByClassName('search__block')[0];
                if(el){
                    if(el == e.target || el.value)
                        elWrap.classList.add('focus');
                    else if(el != e.target || !el.value)
                        elWrap.classList.remove('focus');
                }*/
            });
        });
    }
    handleStatus(e){
        if(e.target.id == 'statusInput'){
            //e.target.querySelector(".arrow").classList.toggle('rotate');
            e.target.querySelector(".order__status-list").classList.toggle('show');
        }
    }
    statusList(e){
        if(e.target.tagName == 'SPAN'){
            let el = e.target;
            const input = document.getElementById('statusInput');
            const statusList = document.getElementById('statusList');
            let context = el.textContent;
            console.log(context);
            input.querySelector('span').innerHTML = context;
            //input.querySelector('input').value = context;
            statusList.classList.remove('show');

            this.setState({
                status: context
            });

        }
    }

    handleDelete(){
        const { deleteOrderAction } = this.props.deleteOrderAction;

       deleteOrderAction(this.props.match.params.id);

    }

    render(){

        const {newStatusAction} = this.props.newStatusAction;

        const order = this.props.orders.ordersArr[this.props.match.params.id];
        if(this.props.orders.ordersArr[this.props.match.params.id].id == this.props.match.params.id){
            return(
                <div className='orders__list-wrap clearfix'>
                    <div className="orders__list-header">
                        <h2 className="home__block-title">
                            {'Order #' + order.reference}
                        </h2>
                        <div className="orders__list-setings">
                            <div className="inner">
                                <Link to='/orders' className="orders__list-btn">
                                    <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                                    </svg>
                                    list
                                </Link>
                                <span className="orders__list-btn delete" onClick={this.handleDelete.bind(this)}>
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                </svg>
                                delete
                            </span>
                                <span className="orders__list-btn">
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                                </svg>
                                refresh
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="order__wrap">
                        <div className="order__inputs">
                            <div className="order__inputs-block clearfix">
                                <label>date</label>
                                <input type="text" className='order__inputs-input' value={order.date} readOnly />
                            </div>
                            <div className="order__inputs-block clearfix">
                                <label>customer</label>
                                <input type="text" className='order__inputs-input' value={order.customer} readOnly />
                            </div>
                            <div className="order__inputs-block clearfix">
                                <label>status</label>
                                <div className='order__inputs-input flex' id='statusInput' onClick={this.handleStatus.bind(this)}>
                                    <Status order={order} status={this.state.status} id={this.props.match.params.id} newStatusAction={newStatusAction} />
                                    <svg className='arrow' width='24' height='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M7 10l5 5 5-5z"/>
                                    </svg>
                                    <ul className="order__status-list" id='statusList' onClick={this.statusList.bind(this)}>
                                        <li className="order__status-item"><span>delivered</span></li>
                                        <li className="order__status-item"><span>ordered</span></li>
                                        <li className="order__status-item"><span>cancelled</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <table className="order__table ">
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
                                <td>{order.reference}</td>
                                <td>20,3&nbsp;$</td>
                                <td>1</td>
                                <td>{order.total}&nbsp;$</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    deleted
                </div>
            )
        }

    }
}

function mapStateToProps (state) {
    return {
        orders: state.ordersReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        newStatusAction: bindActionCreators(newStatusAction, dispatch),
        deleteOrderAction: bindActionCreators(deleteOrderAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)