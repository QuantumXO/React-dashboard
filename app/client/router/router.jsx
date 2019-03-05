'use strict';

// React
import React from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Containers
import Home from './../containers/home/home'
import Customers from './../containers/customers/customers'
import Orders from './../containers/orders/orders'
/*iimport Order from "../containers/order";
import Admin from "../containers/admin";*/

const Routes = () => {
    return(
        <Switch>
            {/*<Route exact path='/' component={Home} />*/}
            <Route path='/customers' component={Customers} />
            <Route path='/' component={Orders} />
            {/*<Route path='/order/:id' component={Order} />
            <Route path='/admin' component={Admin} />*/}
        </Switch>
    )
};

export default Routes