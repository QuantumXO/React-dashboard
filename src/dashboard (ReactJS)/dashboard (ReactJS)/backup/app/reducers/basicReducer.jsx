
const initialState = {
    mainState: true,
    isAuth: false,
    login: 'admin',
    password: '123'
};

export default function basicReducer(state = initialState, action){
    switch (action.type) {
        case 'LOG_OUT':
            return {
                ...state, isAuth: action.payload
            };
        default:
            return state;

    }

}

