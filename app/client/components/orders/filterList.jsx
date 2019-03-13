'use strict';

import React, { PureComponent } from 'react'


class FilterList extends PureComponent{

    constructor(props){
        super(props);

        /*this.state = {
            upd: false,
        };*/

        this.addFilterField = this.addFilterField.bind(this);
    }

    addFilterField(e){

        const targetAttr = e.target.getAttribute('data-item');

        this.props.fieldShowFunc(
            {
                name: targetAttr,
                show: true
            }
        );

        //this.setState({upd: !this.state.upd});

    }

    componentWillReceiveProps(nextProps){
        //console.log("componentWillReceiveProps()");
        //this.setState({upd: !this.state.upd})
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
