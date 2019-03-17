'use strict';

import './preloader.sass'
import React from 'react'

export default function Preloader(){
    return (
        <div className="loader">
            <div className="loader__wrap">
                <div className="loader__inner">
                    <div className="loader__item item-1" />
                    <div className="loader__item item-2" />
                    <div className="loader__item item-4" />
                    <div className="loader__item item-3" />
                </div>
            </div>
        </div>
    );
}