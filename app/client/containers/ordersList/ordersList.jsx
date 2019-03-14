'use strict';

import './_orders.sass'

import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from './../../components/default/button'
import OrdersTable from './../../components/orders/table'
import Search from './../../components/orders/search'
import FilterList from './../../components/orders/FilterList'


import * as filterAction from '../../actions/ordersList/filterAction'

const refreshBtnContent = '<svg width=\'24\' focusable="false" viewBox="0 0 24 24" aria-hidden="true">\n' +
    '                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>\n' +
    '                                </svg>\n' +
    '                                refresh';

class OrdersList extends Component{

    constructor(props){
        super(props);

        const {searchFields, orders} = this.props.ordersListProps;

        this.state = {
            searchValue: '',
            searchTypes: [],
            coincidence: '', // for highlight
            upd: false,
            showFilterList: false,
            searchFields: searchFields,
            orders: orders,

        };

        this.search = this.search.bind(this);
        this.refresh = this.refresh.bind(this);
        this.addFilter = this.addFilter.bind(this);
        this.handleStateOfFilterList = this.handleStateOfFilterList.bind(this);

    }

    handleStateOfFilterList(e){

        const target = e.target;

        this.setState({showFilterList: !this.state.showFilterList});
    }

    refresh(){
        this.forceUpdate();
    }

    addFilter(){

        this.setState({
            showFilterList: !this.state.showFilterList
        })

    }

    search(value, type){

        this.setState({
            searchValue: value,
            searchTypes: type,
        });

        console.log('value: ', value);
        console.log('type: ', type);

    }

    componentWillReceiveProps(nextProps){

        this.setState({upd: !this.state.upd})
    }

    render() {

        const orders = this.state.orders;
        let newOrdersArr = orders;

        if(this.state.searchValue){
            let searchValue = this.state.searchValue;
            newOrdersArr = [];

            for(let i=0; i < orders.length; i++){
                let customer = orders[i].customer.toLowerCase();
                if(
                    orders[i].reference.match(searchValue) ||
                    customer.match(searchValue) ||
                    orders[i].status.match(searchValue) ||
                    orders[i].time.match(searchValue) ||
                    orders[i].total.match(searchValue) ||
                    orders[i].date.match(searchValue)
                ){
                    newOrdersArr.push(orders[i]);
                }
            }

        }

        return(
            <div className='orders__wrap clearfix'>

                <Helmet>
                    <title>Orders page</title>
                </Helmet>

                <div className="orders__header">
                    <h2 className="default__title">Orders Lists</h2>
                    <div className="orders__settings">
                        <div className="orders__inner">
                            <span className="orders__inner__btn" onClick={this.addFilter} >
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                                </svg>
                                add filter
                            </span>

                            <Button
                                handleClickFunc={this.refresh}
                                content={refreshBtnContent}
                                classes={'orders__inner__btn refresh'}
                            />

                        </div>

                        <FilterList
                            active={this.state.showFilterList}
                            handleStateOfFilterListFunc={this.handleStateOfFilterList}
                            fieldShowFunc={this.props.filterAction.changeFilterFieldState}
                            searchFields={this.state.searchFields}
                        />

                        <Search
                            searchFunc={this.search}
                            fieldHandleStateFunc={this.props.filterAction.changeFilterFieldState}
                            searchFields={this.state.searchFields}
                        />

                    </div>
                </div>
                <OrdersTable ordersList={newOrdersArr} />
            </div>
        )
    }

}

function mapStateToProps (state) {
    return {
        ordersListProps: state.ordersReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        filterAction: bindActionCreators(filterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)

