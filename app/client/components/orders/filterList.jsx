'use strict';

import React, { PureComponent } from 'react'


class FilterList extends PureComponent{

    constructor(props){
        super(props);

        this.addFilterField = this.addFilterField.bind(this);
    }

    addFilterField(e){

            const targetAttr = e.target.getAttribute('data-item');

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
                onClick={this.addFilterField}
                className={"orders__filter__list" + (this.props.active ? " show" : "")}
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
