'use strict';

import React, {PureComponent} from 'react'


class Search extends PureComponent{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="customers__search__inner">
                    <label>Search</label>
                    <input
                        type="text"
                        className="customers__search__field"
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Search