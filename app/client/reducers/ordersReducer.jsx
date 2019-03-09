'use strict';

const initialState = {
    orders: [
        {id: '0', date: '01.12.2013', time: '23:18:09', reference: 'kfrzrm', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Hettie Carson', nbItems: '2', total: '80.94', status: 'delivered', returned: 'false' },
        {id: '1', date: '01.11.2013', time: '23:18:03', reference: 'kfrzrm', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Hettie Canson', nbItems: '2', total: '80.94', status: 'delivered', returned: 'true' },
        {id: '2', date: '01.11.2013', time: '23:18:09', reference: 'admin', img: '//robohash.org/6d7edcbed3f1b05f647f310ad1ec19ef.png?size=25x25', customer: 'CVTMEDOWN', nbItems: '2', total: '80.94', status: 'delivered', returned: 'true' },
        {id: '3', date: '29.11.2016', time: '23:18:09', reference: '7hiz4j', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Adddafga', nbItems: '2', total: '80.94', status: 'cancelled', returned: 'false' },
        {id: '4', date: '10.12.2016', time: '3:31:32', reference: 'ov8wxh', img: '//robohash.org/c295675ccb321fb90c4f7f2578758233.png?size=25x25', customer: 'Lilly Meyer', nbItems: '1', total: '78.174', status: 'cancelled', returned: 'false' },
        {id: '5', date: '10.11.2015', time: '5:57:02', reference: '8bti0t', img: '//robohash.org/d7542699fa849ad8c449faf1aa76bfe0.png?size=25x25', customer: 'Joe Farmer', nbItems: '1', total: '7109.03', status: 'cancelled', returned: 'false' },
    ],

};

export default function ordersReducer(state = initialState, action) {

    switch (action.type){

        default:
            return state;

    }



}