'use strict';

import React, { PureComponent } from 'react';

import SortBtn from '../default/sortBtn';
import {Link} from "react-router-dom";


class CustomersTable extends PureComponent{

    constructor(props){
        super(props);

        const {customersList, isCheckedAll, isCheckedItem} = this.props;

        this.state = {
            upd: false,
            sortBy: null,
            customersList: customersList,
            isCheckedAll: isCheckedAll || false,
            isCheckedItem: isCheckedItem,
            direction: true // (ASC)
        };

        this.sort = this.sort.bind(this);
        this.checkAll = this.checkAll.bind(this);
    }

    sort(){

    }

    checkAll(){

    }

    changeStateCheckItem(){

    }


    componentDidUpdate(prevProps) {

        const {isCheckedAll, isCheckedItem, customersList} = this.props;

        if(prevProps.isCheckedAll !== isCheckedAll) {
            this.setState({isCheckedAll: isCheckedAll});
        }

        if(prevProps.isCheckedItem !== isCheckedItem) {
            this.setState({isCheckedItem: isCheckedItem});
        }

        if(prevProps.customersList !== customersList) {
            this.setState({customersList: customersList});

            console.log('componentDidUpdate -> [customersList]: ', customersList);
        }
    }

    render(){

        let {isCheckedAll, isCheckedItem} = this.state;

        const customersList = this.props.customersList || [];

        const customers = customersList.map((item, i) => {

            let randomOrdersNum = Math.round(1 - 0.5 + Math.random() * (10 - 1 + 1));

            return(
                <tr key={i}>
                    <td className={'check--col'}>
                        <span className='check--item' onClick={this.changeStateCheckItem.bind(this, item.id)}>
                            <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                {isCheckedAll || (isCheckedItem.indexOf(item.email) !== -1) ?
                                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /> :
                                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                                }
                            </svg>
                            <input type="checkbox" />
                        </span>
                    </td>

                    <td className='tbody__name'>

                        <Link to={'/customer/' + i} className='customers__list__link'>
                            <img src={item.picture.thumbnail} alt />
                            <span>{item.name.first}&nbsp;{item.name.last}</span>
                        </Link>


                    </td>

                    <td className='tbody__registered'>
                        <span>{item.registered.date}</span>
                    </td>

                    <td className='tbody__orders'>
                        <span>{randomOrdersNum}</span>
                    </td>

                    <td className='tbody__orders'>
                        <span>{randomOrdersNum}</span>
                    </td>
                </tr>
            )
        });

        return(
            <table className="customers__list__table">
                <thead className='customers__list__thead'>
                    <tr>
                        <th className='check--col'>
                            <span className='check--all' onClick={this.checkAll} >
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    {!isCheckedAll ?
                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /> :
                                        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    }
                                </svg>
                                <input type="checkbox" />
                            </span>
                        </th>
                        <th>
                            <SortBtn
                                title='Name'
                                sortFunc={this.sort}
                                active={this.state.sortBy}
                                direction={this.state.direction}
                                btnClass={'name'}
                            />
                        </th>
                        <th>
                            <SortBtn
                                title='Registered'
                                sortFunc={this.sort}
                                active={this.state.sortBy}
                                direction={this.state.direction}
                                btnClass={'registered'}
                            />
                        </th>
                        <th>
                            <SortBtn
                                title='Orders'
                                sortFunc={this.sort}
                                active={this.state.sortBy}
                                direction={this.state.direction}
                                btnClass={'orders'}
                            />
                        </th>
                        <th>
                            <SortBtn
                                title='Total spent'
                                sortFunc={this.sort}
                                active={this.state.sortBy}
                                direction={this.state.direction}
                                btnClass={'total_spent'}
                            />
                        </th>
                        <th>
                            <SortBtn
                                title='News'
                                sortFunc={this.sort}
                                active={this.state.sortBy}
                                direction={this.state.direction}
                                btnClass={'news'}
                            />
                        </th>
                        <th>
                            <SortBtn
                                title='Segments'
                                sortFunc={this.sort}
                                active={this.state.sortBy}
                                direction={this.state.direction}
                                btnClass='segments'
                            />
                        </th>
                        <th />  {/* <-- need to free space*/}
                    </tr>
                </thead>

                <tbody className='orders__list__tbody'>
                   {customers}
                </tbody>
            </table>
        )
    }
}

export default CustomersTable