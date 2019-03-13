'use strict';

import React, {PureComponent} from 'react'

export default class Button extends PureComponent{

    constructor(props) {
        super(props);

    }


    handleClick(func){
        func();
    }

    render(){

        const {handleClickFunc, classes, content} = this.props;

        return (

            <button
                dangerouslySetInnerHTML={{__html: content}}
                onClick={handleClickFunc ? this.handleClick.bind(this, handleClickFunc) : this.handleClick.bind(this)}
                type="button"
                className={classes}
            ></button>
        )
    }

};