'use strict';

import React, {PureComponent} from 'react'


export default class FilterItemCloseBtn extends PureComponent{

    render() {
        return(
            <span
                className={this.props.classes}
                data-close={this.props.close}
                onClick={this.props.fieldHideFunc}
            >
            x
            </span>
        )
    }
}


