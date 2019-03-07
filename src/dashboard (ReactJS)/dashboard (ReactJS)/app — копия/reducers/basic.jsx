const initialState = {
	someState: 'true',
	menuShow: true
};
export default function basicReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_MENU_STATE':
            return { ...state, menuShow: action.payload };
		default:
            return state
	}
}