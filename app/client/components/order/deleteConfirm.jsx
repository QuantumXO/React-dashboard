'use strict';

import React, {PureComponent, Component} from 'react';
//import {Helmet} from "react-helmet";
import Button from "./../default/button";

class DeleteConfirm extends PureComponent{

    constructor(props){
        super(props);

        this.deleteOrder = this.deleteOrder.bind(this);
        this.handleDeleteState = this.handleDeleteState.bind(this);
    }

    handleDeleteState(){
        this.props.handleDeleteStateFunc();
    }

    deleteOrder(){
        console.log('deleteConfirm.jsx -> deleteOrder');
        this.props.deleteOrderFunc(this.props.id);
    }

    render(){

        const {id} = this.props;

        return(
            <div className='order__wrap clearfix'>
                <div className="order__header">
                    <h2 className="order__header__title">Delete Order #{id}</h2>
                    <div className="order__header__settings">
                        <div className="order__header__inner">

                            <Button
                                type="link"
                                iconName="list"
                                content="list"
                                linkTo="/orders"
                                classes={'default__btn'}
                            />

                        </div>
                    </div>
                </div>
                <div className="order__inner">
                    <p>Are you sure ?</p>

                    <div className="order__inner__footer">

                        <Button
                            type="link"
                            iconName="success"
                            content="delete"
                            linkTo="/orders"
                            handleClickFunc={this.deleteOrder}
                            classes={'default__btn success'}
                        />

                        <Button
                            iconName="cancel"
                            content="cancel"
                            handleClickFunc={this.handleDeleteState}
                            classes={'default__btn cancel'}
                        />

                    </div>
                </div>

            </div>
        )
    }
}
export default DeleteConfirm