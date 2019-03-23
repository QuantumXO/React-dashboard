'use strict';

import React from 'react'


const FilterItemCloseBtn = ({classes, close, fieldHideFunc}) => {

    return(
        <span
            className={classes}
            data-close={close}
            onClick={fieldHideFunc}
        >
            x
        </span>
    )
};

export default FilterItemCloseBtn

