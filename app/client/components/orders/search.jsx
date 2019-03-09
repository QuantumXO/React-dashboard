
'use strict';

import React, {PureComponent} from 'react'

class OrdersSearch extends PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            fieldIsActive: false,
        };

        this.getWrapRef = React.createRef();
        this.getInputRef = React.createRef();

        this._search = this._search.bind(this)

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

    _search(e){
        this.props.searchFunc(e.target.value.toLowerCase());
    }

    render() {
        return(
            <div className={"orders__search__wrap clearfix"}
                 ref={this.getWrapRef}
            >
                <label>Search</label>
                <input type="text" id='ordersSearch'
                       onChange={this._search}
                       className='orders__search__field'
                       ref={this.getInputRef}
                />
            </div>
        )
    }
}

export default OrdersSearch

