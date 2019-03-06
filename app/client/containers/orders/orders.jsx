'use strict';

import './_orders.sass'

import React, { Component } from 'react'

import { Helmet } from "react-helmet"

import OrdersSearch from './../../components/orders/search'

class Orders extends Component{

    render() {
        return(
            <div className='orders__wrap clearfix'>

                <Helmet>
                    <title>Orders page</title>
                </Helmet>

                <div className="orders__header">
                    <h2 className="default__title">Orders Lists</h2>
                    <div className="orders__settings">
                        <div className="orders__inner">
                            <span className="orders__inner__btn">
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                                </svg>
                                add filter
                            </span>
                            <span className="orders__inner__btn">
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                                </svg>
                                refresh
                            </span>
                        </div>
                        <OrdersSearch />
                    </div>
                </div>

                Orders.jsx
            </div>
        )
    }

}

export default Orders

