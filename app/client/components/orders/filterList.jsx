'use strict';

import React, { PureComponent } from 'react'


class FilterList extends PureComponent{

    constructor(props){
        super(props);

        this._addFilterField = this._addFilterField.bind(this)
    }

    _addFilterField(e){


            const targetAttr = e.target.getAttribute('data-item');

            console.log();

            switch (targetAttr) {

                case 'customer':
                    console.log(0);



                    break;

                case 'status':
                    console.log(1);




                    break;

                case 'passed-since':
                    console.log(2);



                    break;

                case 'passed-before':
                    console.log(3);


                    break;

                case 'min-amount':
                    console.log(4);



                    break;

                case 'returned':
                    console.log(5);



                    break;

            }

    }

    render(){
        return(
            <ul
                role='menu'
                onClick={this._addFilterField}
                className={this.props.active ? "orders__filter__list show"  : "orders__filter__list" }
            >
                <li className="orders__filter__item" data-item="customer">customer</li>
                <li className="orders__filter__item" data-item="status">status</li>
                <li className="orders__filter__item" data-item="passed-since">passed since</li>
                <li className="orders__filter__item" data-item="passed-before">passed before</li>
                <li className="orders__filter__item" data-item="min-amount">min amount</li>
                <li className="orders__filter__item" data-item="returned">returned</li>
            </ul>
        )
    }
}

export default FilterList
