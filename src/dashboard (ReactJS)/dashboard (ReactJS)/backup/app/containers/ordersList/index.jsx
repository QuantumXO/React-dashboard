// React
import React, { Component } from 'react'
// Sass
import '../../../css/_config.sass'
import './style.sass'
// Components
import OrdersTable from '../../components/orders/ordersTable'
import OrdersSearch from '../../components/orders/ordersSearch'
// Store
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
// Reducers
import { rootReducer } from '../../reducers/rootReducer'
// Actions
import { ordersAction } from '../../actions/ordersAction'


class Orders extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function (){
            document.addEventListener('mouseup', function (e) {

                const el = document.getElementById('ordersSearch');
                const elWrap = document.getElementsByClassName('search__block')[0];
                if(el){
                    if(el == e.target || el.value)
                        elWrap.classList.add('focus');
                    else if(el != e.target || !el.value)
                        elWrap.classList.remove('focus');
                }
            });
        });
    }

    render(){
        return(
            <div className='orders__list-wrap clearfix'>
                <div className="orders__list-header">
                    <h2 className="home__block-title">Orders Lists</h2>
                    <div className="orders__list-setings">
                        <div className="inner">
                            <span className="orders__list-btn">
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                                </svg>
                                add filter
                            </span>
                                <span className="orders__list-btn">
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                                </svg>
                                refresh
                            </span>
                        </div>
                        <OrdersSearch orders={this.props.orders} ordersAction={this.props.ordersAction} />
                    </div>{/* /orders__list-setings */}
                </div>
                <OrdersTable orders={this.props.orders} />
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        orders: state.ordersReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        ordersAction: bindActionCreators(ordersAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)