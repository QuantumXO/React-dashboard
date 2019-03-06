'use strict';

import './_home.sass'

import React, { Component } from 'react'
import { Helmet } from "react-helmet"

import RevenueBlock from './../../components/home/revenueBlock'
import NewOrdersBlock from './../../components/home/newOrdersBlock'
import PendingOrdersBlock from './../../components/home/pendingOrdersBlock'
import ReviewsBlock from './../../components/home/ReviewsBlock'
import NewCustomersBlock from './../../components/home/NewCustomersBlock'

class Home extends Component{

    render(){
        return(
            <div className='home__wrap clearfix'>
                <Helmet>
                    <title>Home page</title>
                </Helmet>

                <div className="home__inner">
                    <div className="flex-container">
                        <RevenueBlock />
                        <NewOrdersBlock />
                    </div>

                    <div className="home__block standard">
                        <h2 className="home__block__title">Welcome to react-admin demo</h2>
                        <p className="home__block__content">This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it's local to your computer, and will reset each time you reload.</p>
                        <div className="home__block__footer">
                            <a href="" role='button' className="link">
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                </svg>
                                <span>react-admin site</span>
                            </a>
                            <a href="" role='button' className="link">
                                <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                </svg>
                                <span>Source for this demo</span>
                            </a>
                        </div>
                    </div>
                    <PendingOrdersBlock />
                </div>

                <div className="home__inner">
                    <ReviewsBlock />
                    <NewCustomersBlock />
                </div>

            </div>
        )
    }

}

export default Home














