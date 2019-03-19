'use strict';

import './_button.sass'

import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

const refreshIco = '<svg width=\'24\' focusable="false" viewBox="0 0 24 24">\n' +
    '                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>\n' +
    '               </svg>';

const deleteIco = '<svg width="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>';

const filterIco = '<svg width=\'24\' focusable="false" viewBox="0 0 24 24" aria-hidden="true">\n' +
    '                   <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />\n' +
    '              </svg>';

const listIco = '<svg width="24" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" /></svg>';

const successIco = '<svg width="24" viewBox="0 0 24 24" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>';

const canselIco = '<svg width="24" viewBox="0 0 24 24" ><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>';

export default class Button extends PureComponent{

    constructor(props) {
        super(props);

    }

    handleClick(func){
        func();
    }

    render(){

        const {handleClickFunc, classes, content, iconName, type, redirectTo} = this.props;
        let icon;

        switch (iconName) {
            case 'delete':
                icon = deleteIco;
                break;
            case 'refresh':
                icon = refreshIco;
                break;
            case 'filter':
                icon = filterIco;
                break;
            case 'list':
                icon = listIco;
                break;
            case 'success':
                icon = successIco;
                break;
            case 'cancel':
                icon = canselIco;
                break;
        }


        if(type == 'link'){

            return (

                <Link
                    to={redirectTo}
                    dangerouslySetInnerHTML={{__html: icon + content}}
                    onClick={handleClickFunc ? this.handleClick.bind(this, handleClickFunc) : this.handleClick.bind(this)}
                    className={classes}
                />

            )
        }

        return (

            <button
                type="button"
                dangerouslySetInnerHTML={{__html: icon + content}}
                onClick={handleClickFunc ? this.handleClick.bind(this, handleClickFunc) : this.handleClick.bind(this)}
                className={classes}
            />
        )
    }

};