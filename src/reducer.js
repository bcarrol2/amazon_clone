export const initialState = {
    basket: []
};

function reducer(state, action) {
    // switch check against a bunch of cases like strings
    // switch on an action type
    switch(action.type) {
        case 'ADD_TO_BASKET':

            break;
        case 'REMOVE_FROM_BASKET':

            break;
        default:
            return state;
    }
};

export default reducer;