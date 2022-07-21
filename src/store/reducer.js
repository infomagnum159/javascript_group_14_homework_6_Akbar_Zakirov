import {PASSWORD} from '../constants';

const initialState = {
    password: ''
};

const reducer = (state = initialState, action) => {
    if (action.type === 'DELETE') {
        let password = state.password.slice(0, -1);
        return {...state, password};
    }
    if (action.type === 'ADD' && state.password.length < 4) {
        return {...state, password: state.password + action.password};
    }
    if (action.type === 'VERIFY') {
        if (state.password === PASSWORD) {
            return {...state, password: 'Access Granted'};
        } else {
            return {...state, password: 'Access Denied'};
        }
    }
    if (action.type === "CLEAR") {
        return {...state, password: ''}
    }
    return state;
};

export default reducer;