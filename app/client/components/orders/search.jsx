
'use strict';

import React, {PureComponent} from 'react'

import ReactDOM from 'react-dom'

class OrdersSearch extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            fieldIsActive: false,
            fieldValue: ''
        }
    }

    componentDidMount(){

        document.body.addEventListener('click', function (e) {

            const el = document.getElementById('ordersSearch');
            const label = document.querySelector('.orders__search__wrap label');
            const elWrap = document.getElementsByClassName('orders__search__wrap')[0];

            if(e.target != el && e.target != label && !el.value)
                elWrap.classList.remove('active');

        });


    }

    search(e){
        this.setState({fieldValue: e.target.value.toLowerCase()});
    }

    handleFieldState(){
        this.setState({fieldIsActive: true});
    }

    getWrapRef(node){


        const testWrap = ReactDOM.findDOMNode(this._wrap);

        console.log(testWrap);

        return this._wrap = node;

    }

    render() {
        return(
            <div className={this.state.fieldIsActive ? "orders__search__wrap clearfix active" : "orders__search__wrap clearfix"} ref={this.getWrapRef}  >
                <label>Search</label>
                <input type="text" id='ordersSearch'
                       onClick={this.handleFieldState.bind(this)}
                       //onMouseOver={this.handleFieldState.bind(this)}
                       //onMouseOut={this.handleFieldState.bind(this)}
                       //onFocus={this.handleFieldState.bind(this)}
                       onChange={this.search.bind(this)}
                       className='orders__search__field'
                />
            </div>
        )
    }
}

export default OrdersSearch

