// React
import React, { PureComponent } from 'react'


class Input extends PureComponent{
    constructor(props){
        super(props)
    }

    handleSearch(e){
        let value = e.target.value.toLowerCase();

        console.log(this.props.ordersAction);

        this.props.ordersAction(value);

    }

    render(){
        return(
            <input type="text" id='ordersSearch' onChange={this.handleSearch.bind(this)} className='orders__list-search' />
        )
    }
}

class OrdersSearch extends PureComponent{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="search__block clearfix">
                <label>Search</label>
                <Input />
            </div>
        )
    }
}

export default OrdersSearch