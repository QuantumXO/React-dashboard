'use strict';

import './_customers.sass';

import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';


import Preloader from "../ordersList/ordersList";
import Button from './../../components/default/button';
import Search from './../../components/customers/search';
import CustomersTable from "../../components/customers/customersTable";

import * as basicAction from "../../actions/basic/basicAction";
import * as filterAction from "../../actions/customers/filterAction";
import * as customersAction from "../../actions/customers/customersAction";

class Customers extends Component{

    constructor(props){
        super(props);


        this.search = this.search.bind(this);
        this.refresh = this.refresh.bind(this);
        this.addFilter = this.addFilter.bind(this);
        this.searchFields = this.searchFields.bind(this);
        this.changeFilterFieldState = this.changeFilterFieldState.bind(this);

    }

    search(){

    }

    refresh(){

    }

    addFilter(){

    }

    searchFields(){

    }

    changeFilterFieldState(){

    }


    componentDidMount() {

        const randomNumber =  Math.round(10 - 0.5 + Math.random() * (50 - 10 + 1));

        this.props.customersAction.getData(`https://randomuser.me/api/?results=${randomNumber}`);

    }

    render(){

        const {checkedAll, checkedItems, searchFields, customersList} = this.props.customersListProps;

        if(this.props.isLoading){
            return(
                <Preloader />
            )
        }

        return(
            <div className='customers__wrap clearfix'>

                <Helmet>
                    <title>Customers List</title>
                </Helmet>

                <div className="customers__header">
                    <h2 className="default__title">Customers Lists</h2>
                    <div className="customers__settings">
                        <div className="customers__inner">

                           {/* {checkedAll || checkedItems.length ? (*/}
                            {0 == 0 ? (
                                <Button
                                    iconName="delete"
                                    content="delete"
                                    //handleClickFunc={this.deleteOrder}
                                    classes={'default__btn delete'}
                                />
                            ) : null}

                            <Button
                                iconName="filter"
                                content="add filter"
                                handleClickFunc={this.addFilter}
                                classes={'default__btn need-fix'}
                            />

                            <Button
                                iconName="refresh"
                                content="refresh"
                                handleClickFunc={this.refresh}
                                classes={'default__btn refresh'}
                            />

                        </div>

                        {/*<FilterList
                            active={this.state.showFilterList}
                            handleStateOfFilterListFunc={this.handleStateOfFilterList}
                            fieldShowFunc={this.props.filterAction.changeFilterFieldState}
                            searchFields={searchFields}
                        />
                         */}

                        <Search
                            searchFunc={this.search}
                            fieldHandleStateFunc={this.props.filterAction.changeFilterFieldState}
                            searchFields={searchFields}
                        />

                    </div>
                </div>

                <CustomersTable
                    customersList={customersList}
                    isCheckedAll={checkedAll}
                    isCheckedItem={checkedItems}
                />
            </div>
        )
    }

}

Customers.propTypes = {
    basicProps: PropTypes.shape({
        author: PropTypes.string,
        version: PropTypes.string,
        isLoading: PropTypes.bool,
        menuLinksHide: PropTypes.bool,
    }),
};

function mapStateToProps (state) {
    return {
        customersListProps: state.customersReducer,
        basicProps: state.basicReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        basicAction: bindActionCreators(basicAction, dispatch),
        filterAction: bindActionCreators(filterAction, dispatch),
        customersAction: bindActionCreators(customersAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers)














