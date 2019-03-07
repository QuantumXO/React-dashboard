
// React
import React from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Containers
import Home from '../containers/home'
import Customers from '../containers/customers'
import Orders from '../containers/ordersList'
import Order from "../containers/order";
import Admin from "../containers/admin";

const Routes = () => {
    return(
        <Switch>
            {/*<Route exact path='/' component={Home} />*/}
            <Route exact path='/' component={Home} />
            <Route path='/customers' component={Customers} />
            <Route path='/order/:id' component={Order} />
            <Route path='/orders' component={Orders} />
            <Route path='/admin' component={Admin} />
        </Switch>
    )
};

export default Routes