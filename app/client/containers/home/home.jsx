'use strict';

import './_home.sass';

import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import RevenueBlock from './../../components/home/revenueBlock';
import ReviewsBlock from './../../components/home/ReviewsBlock';
import NewOrdersBlock from './../../components/home/newOrdersBlock';
import NewCustomersBlock from './../../components/home/NewCustomersBlock';
import PendingOrdersBlock from './../../components/home/pendingOrdersBlock';
import Preloader from "./../../components/default/preloader";

import * as basicAction from "../../actions/basic/basicAction";
import * as homeAction from "../../actions/home/homeAction";

class Home extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            isLoading: '',
            randomNewUsers: [],
        }
    }

    componentDidMount() {

        this.props.homeAction.getRandomNewUsers(15);

    }

    componentDidUpdate(prevProps) {

        const {isLoading, randomNewUsers} = this.props.homeProps;

        if(prevProps.isLoading !== isLoading) {

            this.setState({
                isLoading: isLoading,
                //randomNewUsers: randomNewUsers
            });

        }
    }

    render(){

        if(this.state.isLoading){
            return(
                <Preloader />
            )
        }

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
                    <NewCustomersBlock randomNewUserslist={this.props.homeProps.randomNewUsers} />
                </div>

            </div>
        )
    }

}

Home.propTypes = {
    homeProps: PropTypes.shape({
        isLoading: PropTypes.boolean,
        randomNewUsers: PropTypes.array,
    }),
};

function mapStateToProps (state) {
    return {
        basicProps: state.basicReducer,
        homeProps: state.homeReducer,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        basicAction: bindActionCreators(basicAction, dispatch),
        homeAction: bindActionCreators(homeAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)














