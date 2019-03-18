'use strict';

import './_ordersList.sass'

import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Preloader from './../../components/default/preloader'
import Search from './../../components/orders/search'
import Button from './../../components/default/button'
import OrdersTable from './../../components/orders/table'
import FilterList from './../../components/orders/FilterList'

import * as filterAction from '../../actions/ordersList/filterAction'
import * as tableAction from '../../actions/ordersList/tableAction'
import * as basicAction from '../../actions/basic/basicAction'

class OrdersList extends Component{

    constructor(props){
        super(props);

        this.state = {
            searchData: [], // [{type: '', value: ''}]
            coincidence: '', // for highlight
            upd: false,
            isLoading: this.props.basicProps.isLoading,
            //checkedAll: this.props.ordersListProps.checkedAll,
            //checkedItems: this.props.ordersListProps.checkedItems,
            showFilterList: false,
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
        this.props.tableAction.deleteItem();
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

                let withOut = this.state.searchData.filter(item => item.type != type);

                let item = this.state.searchData
                    .filter(item => item.type == type)
                    .map(item => {return {type, value};});

                searchData = [...withOut, ...item];

            }else{

                searchData = [...this.state.searchData, {type: type, value: value}];
            }

            return {
                searchData,
            };

        });

    }

   /* componentWillReceiveProps(nextProps){
        this.setState({
            upd: !this.state.upd,
            orders: this.props.ordersListProps.orders,
        });
    }*/

    componentDidMount(){

        setTimeout(() => {
            this.setState({
                isLoading: false
            }, function () {
                this.props.basicAction.isLoading(false);
            })
        }, 0); // 1000

    }

    render() {

        const {searchData} = this.state;
        const {orders, checkedAll, checkedItems, searchFields} = this.props.ordersListProps;

        let newOrdersArr = orders;

        if(searchData.length){

            newOrdersArr = [];

            for(let i = 0; i < orders.length; i++){

                const order = orders[i];
                const customer = order.customer.toLowerCase();

                for(let i = 0; i < searchData.length; i++){

                    const fieldData  = searchData[i];
                    const fieldDataType = fieldData.type;
                    const fieldDataValue = fieldData.value;

                    if(fieldDataType != 'search'){

                        if(order[fieldDataType].toLowerCase().match(fieldDataValue)){

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

        if(this.state.isLoading){
            return(
                <Preloader />
            )
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

                            {checkedAll || checkedItems.length ? (
                                <Button
                                    iconName="delete"
                                    content="delete"
                                    handleClickFunc={this.deleteOrder}
                                    classes={'default__btn delete'}
                                />
                            ) : null}

                            <Button
                                iconName="filter"
                                content="add filter"
                                handleClickFunc={this.addFilter}
                                classes={'default__btn'}
                            />

                            <Button
                                iconName="refresh"
                                content="refresh"
                                handleClickFunc={this.refresh}
                                classes={'default__btn refresh'}
                            />

                        </div>

                        <FilterList
                            active={this.state.showFilterList}
                            handleStateOfFilterListFunc={this.handleStateOfFilterList}
                            fieldShowFunc={this.props.filterAction.changeFilterFieldState}
                            searchFields={searchFields}
                        />

                        <Search
                            searchFunc={this.search}
                            fieldHandleStateFunc={this.props.filterAction.changeFilterFieldState}
                            searchFields={searchFields}
                        />

                    </div>
                </div>

                <OrdersTable
                    ordersList={newOrdersArr}
                    isCheckedAll={checkedAll}
                    isCheckedItem={checkedItems}
                    checkAllFunc={this.props.tableAction.handleCheckAll}
                    checkItemsFunc={this.props.tableAction.handleCheckItem}
                />
            </div>
        )
    }

}

function mapStateToProps (state) {
    return {
        ordersListProps: state.ordersReducer,
        basicProps: state.basicReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        filterAction: bindActionCreators(filterAction, dispatch),
        tableAction: bindActionCreators(tableAction, dispatch),
        basicAction: bindActionCreators(basicAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)

