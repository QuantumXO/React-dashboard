'use strict';

import React, {PureComponent} from 'react'

export default class logOutBtn extends PureComponent{

    constructor(props){
        super(props);

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(){}

    render(){
        return(
            <div className="header__block">
                <span className="header__logOut" onClick={this.handleAuth}>
                    <svg width='24' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
                    </svg>
                    logout
                </span>
            </div>
        )
    }

}