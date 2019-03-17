'use strict';

// React
import React from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Containers
import Home from './../containers/home/home'
import Customers from './../containers/customers/customers'
import Orders from '../containers/ordersList/ordersList'
import Order from "../containers/order/order"
/*import Admin from "../containers/admin";*/

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Orders} />
            <Route path='/customers' component={Customers} />
            <Route path='/order/:id' component={Order} />
            {/*<Route path='/admin' component={Admin} />*/}
        </Switch>
    )
};

export default Routes