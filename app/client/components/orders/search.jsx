
'use strict';

import React, {PureComponent} from 'react'

import ReactDOM from 'react-dom'

class OrdersSearch extends PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            fieldIsActive: false,
            fieldValue: ''
        };

        this.getWrapRef = React.createRef();
        this.getInputRef = React.createRef();

    }

    componentDidMount(){

        const wrap = this.getWrapRef.current;
        const input = this.getInputRef.current;

        document.body.addEventListener('click', function (e) {

            if(e.target == input){
                wrap.classList.add('active');

            }else if(!input.value)
                wrap.classList.remove('active');

        });

    }

    search(e){
        this.setState({fieldValue: e.target.value.toLowerCase()});
    }

    render() {
        return(
            <div className={this.state.fieldIsActive ? "orders__search__wrap clearfix active" : "orders__search__wrap clearfix"}
                 ref={this.getWrapRef}
            >
                <label>Search</label>
                <input type="text" id='ordersSearch'
                       onChange={this.search.bind(this)}
                       className='orders__search__field'
                       ref={this.getInputRef}
                />
            </div>
        )
    }
}

export default OrdersSearch

