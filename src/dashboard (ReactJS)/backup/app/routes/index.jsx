
// React
import React from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Containers
import Home from '../containers/home'
import Customers from '../containers/customers'
import Orders from '../containers/ordersList'
import Order from "../containers/order";

const Routes = () => {
    return(
        <Switch>
            {/*<Route exact path='/' component={Home} />*/}
            <Route exact path='/' component={Orders} />
            <Route path='/customers' component={Customers} />
            <Route path='/order/:id' component={Order} />
            <Route path='/orders' component={Orders} />
        </Switch>
    )
};

export default Routes