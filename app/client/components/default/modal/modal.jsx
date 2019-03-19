'use strict';

import './_modal.sass'

import React, {PureComponent} from 'react'

import Button from './../button'

export default class Modal extends PureComponent{

    render(){

        const {event, title, submitFunc, data} = this.props;

        return(
            <div className="modal__wrap">
                <div className="modal__inner">
                    <h2 className="modal__title">{event + ' order #' + data.id}</h2>
                    <div className="modal__body">

                    </div>
                    <div className="modal__footer">

                    </div>
                </div>
            </div>
        )
    }
}
