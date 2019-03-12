
'use strict';

import React, {PureComponent} from 'react'

import FilterItemCloseBtn from './filterItemCloseBtn'

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

        this.search = this.search.bind(this);
        this.fieldHide = this.fieldHide.bind(this);

    }

    componentDidMount(){

        const wrap = this.getWrapRef.current;
        const input = this.getInputRef.current;

        document.addEventListener('click', function (e) {

            if(e.target == input){
                wrap.classList.add('active');

            }else if(input.getAttribute('data-field') == 'search' && !input.value){
                wrap.classList.remove('active');
            }


            //console.log('e.target == input: ', e.target == input);

            if(0 == 2){
                ///
            }

        });

    }

    search(e){

        this.props.searchFunc(e.target.value.toLowerCase());

    }


    fieldHide(e){

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

            <div className="orders_search__wrap clearfix">


                <div
                    ref={this.getWrapRef}
                    className="orders__search__inner"
                    data-key="search"
                >
                    <label>Search</label>
                    <input
                        type="text"
                        id='ordersSearch'
                        onChange={this.search}
                        data-field="search"
                        className='orders__search__field'
                        ref={this.getInputRef}
                    />
                </div>

                {this.state.fieldCustomerIsActive &&
                    (
                        <div className="orders__search__inner" data-key="customer">
                            <label>Customer</label>
                            <input
                                type="text"
                                id='ordersCustomer'
                                onChange={this.search}
                                className='orders__search__field'
                            />

                            <FilterItemCloseBtn classes='hide__filter' close="customer" fieldHideFunc={this.fieldHide} />
                        </div>
                    )

                }

                {this.state.fieldPassedSinceIsActive &&
                    (
                        <div className="orders__search__inner" data-key="passedSince">
                            <label>passed since</label>
                            <input type="text" id='ordersPassedSince'
                                   onChange={this.search}
                                   className='orders__search__field'
                            />

                            <FilterItemCloseBtn classes='hide__filter' close="passedSince" fieldHideFunc={this.fieldHide} />
                        </div>
                    )

                }

                {this.state.fieldMinAmountIsActive &&
                    (
                        <div className="orders__search__inner" data-key="minAmount">
                            <label>min amount</label>
                            <input type="text" id='ordersMinAmount'
                                   onChange={this.search}
                                   className='orders__search__field'
                            />

                            <FilterItemCloseBtn classes='hide__filter' close="minAmount" fieldHideFunc={this.fieldHide} />
                        </div>
                    )
                }

                {this.state.fieldReturnedIsActive &&
                    (
                        <div className="orders__search__inner" data-key="returned">
                            <label>returned</label>
                            <input
                                type="text"
                                id='ordersReturned'
                                onChange={this.search}
                                className='orders__search__field'
                            />

                            <FilterItemCloseBtn classes='hide__filter' close="returned" fieldHideFunc={this.fieldHide} />
                        </div>
                    )
                }

                {this.state.fieldStatusIsActive &&
                    (
                        <div className="orders__search__inner">
                            <label>status</label>
                            <input
                                type="text"
                                id='ordersStatus'
                                onChange={this.search}
                                className='orders__search__field'
                            />

                            <FilterItemCloseBtn classes='hide__filter' close="status" fieldHideFunc={this.fieldHide} />
                        </div>
                    )
                }

            </div>
        )
    }
}

export default OrdersSearch

