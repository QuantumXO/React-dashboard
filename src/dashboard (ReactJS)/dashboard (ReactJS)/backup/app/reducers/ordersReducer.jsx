
const initialState = {
    ordersArr: [
        {id: '0', date: '01.11.2013', time: '23:18:09', reference: 'kfrzrm', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Hettie Carson', nbItems: '2', total: '80,94', status: 'delivered', returned: false },
        {id: '1', date: '01.11.2013', time: '23:18:09', reference: 'kfrzrm', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'Hettie Carson', nbItems: '2', total: '80,94', status: 'delivered', returned: true },
        {id: '2', date: '01.11.2013', time: '23:18:09', reference: 'admin', img: '//robohash.org/5db6d41ad263c3e41bedad3f4078ca93.png?size=25x25', customer: 'CVTMEDOWN', nbItems: '2', total: '80,94', status: 'delivered', returned: true },
    ],
    filterData: '',
};

export default function ordersReducer(state = initialState, action){
    switch (action.type) {
        case 'FILTER_DATA':
            return {
                ...state, filterData: action.payload
            };
        case 'NEW_STATUS':
            return {
                ...state, status: action.payload
            };
        default:
            return state;

    }
}