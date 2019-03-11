
'use strict';

import React, {PureComponent} from 'react'


class OrdersSearch extends PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            fieldSearchIsActive: false,
            fieldCustomerIsActive: true,
            fieldPassedSinceIsActive: false,
            fieldPassedBeforeIsActive: false,
            fieldMinAmountIsActive: true,
            fieldReturnedIsActive: false,
            fieldStatusIsActive: true,
        };

        this.getWrapRef = React.createRef();
        this.getInputRef = React.createRef();

        this._search = this._search.bind(this)
        this._fieldHide = this._fieldHide.bind(this)

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


    _fieldHide(e){

        const targetAttr = e.target.getAttribute('data-close');

        if(targetAttr == 'customer'){
            this.setState({
                fieldCustomerIsActive: false
            })
        }else if(targetAttr == 'minAmount'){

            this.setState({
                fieldMinAmountIsActive: false
            })
        }else if(targetAttr == 'returned'){

            this.setState({
                fieldReturnedIsActive: false
            })
        }
        else if(targetAttr == 'status'){

            this.setState({
                fieldStatusIsActive: false
            })
        }


    }

    render() {
        return(
            <div className={"orders__search__wrap clearfix"}

            >
                <div ref={this.getWrapRef}
                    className="orders__search__inner">
                    <label>Search</label>
                    <input type="text" id='ordersSearch'
                           onChange={this._search}
                           className='orders__search__field'
                           ref={this.getInputRef}
                    />
                </div>

                {this.state.fieldCustomerIsActive &&
                    <div className="orders__search__inner">
                        <label>Customer</label>
                        <input type="text" id='ordersCustomer'
                               onChange={this._search}
                               className='orders__search__field'
                               ref={this.getInputRef}
                        />
                        <span className="hide__filter" data-close="customer"
                              onClick={this._fieldHide}
                        >x</span>
                    </div>
                }

                {this.state.fieldPassedSinceIsActive &&
                    <div className="orders__search__inner">
                        <label>passed since</label>
                        <input type="text" id='ordersPassedSince'
                               onChange={this._search}
                               className='orders__search__field'
                               ref={this.getInputRef}
                        />
                        <span className="hide__filter" data-close="passedSince"
                              onClick={this._fieldHide}
                        >x</span>
                    </div>
                }

                {this.state.fieldMinAmountIsActive &&
                    <div className="orders__search__inner">
                        <label>min amount</label>
                        <input type="text" id='ordersMinAmount'
                               onChange={this._search}
                               className='orders__search__field'
                               ref={this.getInputRef}
                        />
                        <span className="hide__filter" data-close="minAmount"
                              onClick={this._fieldHide}
                        >x</span>
                    </div>
                }


                {this.state.fieldReturnedIsActive &&
                    <div className="orders__search__inner">
                        <label>returned</label>
                        <input type="text" id='ordersReturned'
                               onChange={this._search}
                               className='orders__search__field'
                               ref={this.getInputRef}
                        />
                        <span className="hide__filter" data-close="returned"
                              onClick={this._fieldHide}
                        >x</span>
                    </div>
                }

                {this.state.fieldStatusIsActive &&
                    <div className="orders__search__inner">
                        <label>status</label>
                        <input type="text" id='ordersStatus'
                               onChange={this._search}
                               className='orders__search__field'
                               ref={this.getInputRef}
                        />
                        <span className="hide__filter" data-close="status"
                              onClick={this._fieldHide}
                        >x</span>
                    </div>
                }

            </div>
        )
    }
}

export default OrdersSearch

