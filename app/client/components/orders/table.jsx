'use strict';

import React, { PureComponent } from 'react'
// Router
import { Link } from 'react-router-dom'

class OrdersTable extends PureComponent{

    render() {

        const orders = this.props.ordersList;

        const ordersList = orders.map((item, i) =>

            <tr key={i}>
                <td>
                    <span className='checked--all'>
                        {/*<svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            {!this.state.checkedAll?
                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/> :
                                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            }
                        </svg>*/}
                        <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                        <input type="checkbox" />
                    </span>
                </td>
                <td className='tbody__date'><span>{item.date},&nbsp;{item.time}</span></td>
                <td><span>{item.reference}</span></td>
                <td>
                    <a href={'/customers/' + i} className='orders__list__link'>
                        <img src={item.img} alt=""/>
                        <span>{item.customer}</span>
                    </a>
                </td>
                <td className='tbody__nbItems'><span >{item.nbItems}</span></td>
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
        );

        return(
            <table className="orders__list__table">
                <thead className='orders__list__thead'>
                    <tr>
                        <th>
                            <span className='checkbox--all' >
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                                </svg>
                                <input type="checkbox" />
                            </span>
                        </th>
                        <th>
                            <span className={'date'}>
                                Date
                                <svg width='16' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span className={'reference'} >
                                Reference
                                <svg width='16' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span className={'customer'} >
                                Customer
                                <svg width='16' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </svg>
                            </span>
                        </th>
                        <th className=''>
                            <span className='nb-items'>
                                Nb Items
                            </span>
                        </th>
                        <th>
                            <span className={'total'} >
                                Total
                                <svg width='16' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span className={'status'} >
                                Status
                                <svg width='16' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span className={'returned'}>
                                Returned
                                <svg width='16' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </svg>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody className='orders__list__tbody'>
                    {ordersList}
                </tbody>
            </table>
        )
    }

}

export default OrdersTable