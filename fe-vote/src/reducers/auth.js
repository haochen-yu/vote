import * as types from '../actions/types';

const initialState = {
    authenticated: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.AUTHENTICATED_TRUE:
            return { ...state, authenticated: true };
        case types.AUTHENTICATED_FALSE:
            return { ...state, authenticated: false };
        default:
            return state;
    }
}