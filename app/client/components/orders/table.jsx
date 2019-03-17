'use strict';

import React, { PureComponent } from 'react'
// Router
import { Link } from 'react-router-dom'

import SortBtn from './sortBtn'

class OrdersTable extends PureComponent{

    constructor(props){
        super(props);

        const {isCheckedAll, isCheckedItem} = this.props;

        this.state = {
            sortBy: '',
            //counter: 0,
            searchValue: '',
            upd: false,
            checkedAll: isCheckedAll,
            checkedItems: isCheckedItem,
            //data: this.props.ordersList,
            direction: true // (ASC)
        };

        this.checkAll = this.checkAll.bind(this);
        this.sort = this.sort.bind(this);

    }

    changeStateCheckItem(itemId){
        this.props.checkItemsFunc(itemId);
    }

    checkAll(){
        this.props.checkAllFunc(!this.props.isCheckedAll);
    }

    sort(type){

        let direction = this.state.direction;

        const sortBy = this.state.sortBy;

        if(sortBy == type){
            direction = !direction;
        }else
            direction = true;

        this.setState({
            sortBy: type,
            direction: direction,
        });

    }

    componentDidUpdate(prevProps) {

        const {isCheckedAll, isCheckedItem} = this.props;

        if(prevProps.isCheckedAll !== isCheckedAll) {
            this.setState({checkedAll: isCheckedAll});
        }
        if(prevProps.isCheckedItem !== isCheckedItem) {
            this.setState({checkedItems: isCheckedItem});
        }
    }

    render() {

        const orders = this.props.ordersList;
        const {sortBy, direction} = this.state;

        if(
            sortBy == 'reference' ||
            sortBy == 'customer' ||
            sortBy == 'status' ||
            sortBy == 'returned'
        ){
            orders.sort(function (A, B) {

                A = A[sortBy].toLowerCase();
                B = B[sortBy].toLowerCase();

                if(A < B)
                    return direction ? -1 : 1;
                if(A > B)
                    return direction ? 1 : -1;
                return 0;

            });
        }else if(sortBy == 'date' || sortBy == 'total'){

            orders.sort(function(A, B){

                if(sortBy == 'date'){
                    A = new Date(A[sortBy].split(".").reverse().join(".") + ', ' + A['time']);
                    B = new Date(B[sortBy].split(".").reverse().join(".") + ', ' + B['time']);
                }else{

                    A = Math.ceil(A[sortBy]);
                    B = Math.ceil(B[sortBy]);

                }
                return direction ? (A - B) : (B - A);
            });
        }

        const ordersList =
            orders.map((item, i) =>
                (
                    <tr key={i}>
                        <td className={'check--col'}>
                            <span className='check--item' onClick={this.changeStateCheckItem.bind(this, item.id)}>
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    {this.state.checkedAll || (this.state.checkedItems.indexOf(item.id) !== -1) ?
                                        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /> :
                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                                    }
                                </svg>
                                <input type="checkbox" />
                            </span>
                        </td>
                        <td className='tbody__date'><span>{item.date},&nbsp;{item.time}</span></td>
                        <td><span>{item.reference}</span></td>
                        <td>
                            <a href={'/customer/' + i} className='orders__list__link'>
                                <img src={item.img} alt=""/>
                                <span>{item.customer}</span>
                            </a>
                        </td>
                        <td className='tbody__nbItems'><span>{item.nbItems}</span></td>
                        <td className='tbody__total'><span>{item.total}&nbsp;$</span></td>
                        <td><span>{item.status}</span></td>
                        <td className='tbody__returned'>
                            <span>
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d={item.returned === 'true' ? 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' : 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'} />
                                </svg>
                            </span>
                        </td>
                        <td className='tbody__edit'>
                            <Link to={'/order/' + item.id} className='orders__list__table__btn'>
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </svg>
                                edit
                            </Link>
                        </td>
                    </tr>
                )
        );

        return(
            <table className="orders__list__table">
                <thead className='orders__list__thead'>
                    <tr>
                        <th className='check--col'>
                            <span className='check--all' onClick={this.checkAll} >
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    {!this.state.checkedAll ?
                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /> :
                                        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    }
                                </svg>
                                <input type="checkbox" />
                            </span>
                        </th>
                        <th>
                            <SortBtn sortFunc={this.sort}
                                title={'Date'} active={this.state.sortBy}
                                 direction={this.state.direction} btnClass={'date'}
                            />
                        </th>
                        <th>
                            <SortBtn sortFunc={this.sort}
                                title={'Reference'} active={this.state.sortBy}
                                direction={this.state.direction} btnClass={'reference'}
                            />
                        </th>
                        <th>
                            <SortBtn sortFunc={this.sort}
                                title={'Customer'} active={this.state.sortBy}
                                direction={this.state.direction} btnClass={'customer'}
                            />
                        </th>
                        <th>
                            <span className='nb-items'>
                                Nb Items
                            </span>
                        </th>
                        <th>
                            <SortBtn sortFunc={this.sort}
                                title={'Total'} active={this.state.sortBy}
                                direction={this.state.direction} btnClass={'total'}
                            />
                        </th>
                        <th>
                            <SortBtn sortFunc={this.sort}
                                title={'Status'} active={this.state.sortBy}
                                direction={this.state.direction} btnClass={'status'}
                            />
                        </th>
                        <th>

                            <SortBtn sortFunc={this.sort}
                                title={'Returned'} active={this.state.sortBy}
                                direction={this.state.direction} btnClass={'returned'}
                            />

                        </th>
                        <th />
                    </tr>
                </thead>
                {orders.length ? (
                    <tbody className='orders__list__tbody'>
                    {ordersList}
                    </tbody>
                ) : (
                    <tr>Results not found</tr>
                )}

            </table>
        )
    }

}

export default OrdersTable