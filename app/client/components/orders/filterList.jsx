'use strict';

import React, { PureComponent } from 'react'


class FilterList extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            upd: false,
        };

        this.addFilterField = this.addFilterField.bind(this);
    }

    addFilterField(e){

        const target = e.target;


        if(target.classList.contains('orders__filter__item')){

            const targetAttr = e.target.getAttribute('data-item');

            this.props.fieldShowFunc(
                {
                    name: targetAttr,
                    show: true
                }
            );

        }

        setTimeout(this.props.handleStateOfFilterListFunc, 20);

    }

    componentWillReceiveProps(nextProps){
        this.setState({upd: !this.state.upd})
    }

    render(){

        const list = this.props.searchFields.map((item, i) => (

            <React.Fragment key={i}>
                {!item.show && item.name !== 'search'  ? (
                    <li className="orders__filter__item" data-item={item.name}>{item.title}</li>
                ) : null}
            </React.Fragment>

        ));

        return(
            <ul
                role="menu"
                onClick={this.addFilterField}
                className={"orders__filter__list" + (this.props.active ? " show" : "")}
            >
                {list}
            </ul>
        )
    }
}

export default FilterList
