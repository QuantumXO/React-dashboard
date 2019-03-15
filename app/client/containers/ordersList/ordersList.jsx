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
import * as tableAction from '../../actions/ordersList/tableAction'

const refreshBtnContent = '<svg width=\'24\' focusable="false" viewBox="0 0 24 24">\n' +
    '                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>\n' +
    '                                </svg>\n' +
    '                                refresh';

const deleteBtnContent = '<svg width="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>' +
                            'delete';

class OrdersList extends Component{

    constructor(props){
        super(props);

        const {searchFields, orders, checkedAll, checkedItems} = this.props.ordersListProps;

        this.state = {
            searchValue: '',
            searchData: [], // [{type: '', value: ''}]
            coincidence: '', // for highlight
            upd: false,
            showFilterList: false,
            searchFields: searchFields,
            orders: orders,

        };

        this.search = this.search.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.refresh = this.refresh.bind(this);
        this.addFilter = this.addFilter.bind(this);
        this.handleStateOfFilterList = this.handleStateOfFilterList.bind(this);

    }

    handleStateOfFilterList(e){

        //const target = e.target;

        this.setState({showFilterList: !this.state.showFilterList});
    }

    deleteOrder(){
        console.log('click deleteOrder');
    }

    refresh(){
        this.forceUpdate();
    }

    addFilter(){

       /* this.setState({
            showFilterList: !this.state.showFilterList // <-- Need to fix filters!!!
        });*/

    }

    search(value, type){

        this.setState(state => {

            const isFound = this.state.searchData.some(item => item.type == type);

            let searchData;

            if(isFound){

                //console.log('isFound');

                let withOut = this.state.searchData.filter(item => item.type != type);

                let item = this.state.searchData
                    .filter(item => item.type == type)
                    .map(item => {return {type, value};});

                searchData = [...withOut, ...item];

            }else{

                //console.log('notFound');
                searchData = [...this.state.searchData, {type: type, value: value}];
            }

            //console.log(isFound);

            return {
                searchData,
            };

        });

        /*this.setState({
            //searchValue: value,
            //searchTypes: type,
        });*/

    }

    componentWillReceiveProps(nextProps){
        this.setState({
            upd: !this.state.upd,
        })
    }

    render() {

        const {orders, searchData} = this.state;
        const {checkedAll, checkedItems} = this.props.ordersListProps;

        let newOrdersArr = orders;

        if(searchData.length){

            newOrdersArr = [];

            for(let i = 0; i < orders.length; i++){

                const order = orders[i];

                let customer = order.customer.toLowerCase();

                for(let i = 0; i < searchData.length; i++){

                    const fieldData  = searchData[i];
                    const fieldDataType = fieldData.type;
                    const fieldDataValue = fieldData.value;

                    if(fieldDataType != 'search'){

                        if(order[fieldDataType].toLowerCase().match(fieldDataValue)){

                            console.log(newOrdersArr.indexOf(order));

                            if(newOrdersArr.indexOf(order) == -1){
                                newOrdersArr.push(order);
                            }

                        }

                    }

                    if(fieldDataType == 'search'){

                        if(
                            order.reference.match(fieldDataValue) ||
                            customer.match(fieldDataValue) ||
                            order.status.match(fieldDataValue) ||
                            order.time.match(fieldDataValue) ||
                            order.total.match(fieldDataValue) ||
                            order.date.match(fieldDataValue)
                        ){
                            console.log(newOrdersArr.indexOf(order));

                            if(newOrdersArr.indexOf(order) == -1){
                                newOrdersArr.push(order);
                            }
                        }

                    }


                }

            }

        }


        /*if(this.state.searchValue){
            let searchValue = this.state.searchValue;
            newOrdersArr = [];

            for(let i=0; i < orders.length; i++){

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

        }*/

        return(
            <div className='orders__wrap clearfix'>

                <Helmet>
                    <title>Orders page</title>
                </Helmet>

                <div className="orders__header">
                    <h2 className="default__title">Orders Lists</h2>
                    <div className="orders__settings">
                        <div className="orders__inner">

                            {checkedAll || checkedItems.length ? (
                                <Button
                                    handleClickFunc={this.deleteOrder}
                                    content={deleteBtnContent}
                                    classes={'orders__inner__btn delete'}
                                />
                            ) : null}

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
                <OrdersTable ordersList={newOrdersArr} checkAllFunc={this.props.tableAction.handleCheckAll} checkItemsFunc={this.props.tableAction.handleCheckItem}/>
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
        filterAction: bindActionCreators(filterAction, dispatch),
        tableAction: bindActionCreators(tableAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)

