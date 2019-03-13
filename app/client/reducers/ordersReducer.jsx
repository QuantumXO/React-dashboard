'use strict';

import { CHANGE_FILTER_FIELD_STATE } from '../constans/actionTypes'

const initialState = {

    orders: [
        {id: '0', date: '01.12.2013', time: '23:18:09', reference: 'kfrzrm', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Hettie Carson', nbItems: '2', total: '80.94', status: 'delivered', returned: 'false' },
        {id: '1', date: '01.11.2013', time: '23:18:03', reference: 'kfrzrm', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Hettie Canson', nbItems: '2', total: '80.94', status: 'delivered', returned: 'true' },
        {id: '2', date: '01.11.2013', time: '23:18:09', reference: 'admin', img: '//robohash.org/6d7edcbed3f1b05f647f310ad1ec19ef.png?size=25x25', customer: 'CVTMEDOWN', nbItems: '2', total: '80.94', status: 'delivered', returned: 'true' },
        {id: '3', date: '29.11.2016', time: '23:18:09', reference: '7hiz4j', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Adddafga', nbItems: '2', total: '80.94', status: 'cancelled', returned: 'false' },
        {id: '4', date: '10.12.2016', time: '3:31:32', reference: 'ov8wxh', img: '//robohash.org/c295675ccb321fb90c4f7f2578758233.png?size=25x25', customer: 'Lilly Meyer', nbItems: '1', total: '78.174', status: 'cancelled', returned: 'false' },
        {id: '5', date: '10.11.2015', time: '5:57:02', reference: '8bti0t', img: '//robohash.org/d7542699fa849ad8c449faf1aa76bfe0.png?size=25x25', customer: 'Joe Farmer', nbItems: '1', total: '7109.03', status: 'cancelled', returned: 'false' },
    ],

    searchFields: [
        {id: 0, name: 'search', show: true, value: '', title: 'search'},
        {id: 1, name: 'customer', show: true, value: '', title: 'customer'},
        {id: 2, name: 'passedSince', show: false, value: '', title: 'passed Since'},
        {id: 3, name: 'passedBefore', show: false, value: '', title: 'passed Before'},
        {id: 4, name: 'minAmount', show: false, value: '', title: 'min Amount'},
        {id: 5, name: 'returned', show: false, value: '', title: 'returned'},
        {id: 6, name: 'status', show: false, value: '', title: 'status'},
    ],
    

};

export default function ordersReducer(state = initialState, action) {

    switch (action.type){

        case CHANGE_FILTER_FIELD_STATE:

            const field = state.searchFields.filter(item => (item.name == action.field.name));

            console.log('field: ', field[0]);

            const showState = field[0].show = action.field.show;

            //let newFieldState = state.fieldsIsActive[action.field.name] = action.field.show;


            console.log('field new: ', field[0]);

            return {
                ...state,
                showState
            };

        default:
            return state;

    }



}