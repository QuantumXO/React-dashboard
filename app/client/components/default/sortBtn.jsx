'use strict';

import React, { PureComponent } from 'react'


class SortBtn extends PureComponent{

    handleClick(type){

        const {sortFunc} = this.props;

        sortFunc(type);
    }

    render(){

        const {direction, title, btnClass, active} = this.props;
        const type = title.toLowerCase();

        return(
            <span className={btnClass + (active == type ? ' active' : '')}
                  data-type={type}
                  onClick={this.handleClick.bind(this, type)}
                  data-direction={direction}
            >
                {title}
                <svg width='16' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
                </svg>
            </span>
        )
    }
}

export default SortBtn


