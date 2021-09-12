import {SOCKET_CONNECTION_SUCCESS, SOCKET_CONNECTION_FAIL, SOCKET_CONNECTION_REMOVE} from '../actions/index';

const initialState = {
    socket : null
};

const changeSocketState = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case SOCKET_CONNECTION_SUCCESS:
            return {
                ...state,
                socket : payload
            }
        case SOCKET_CONNECTION_REMOVE:
            return {
                ...state,
                socket : null
            }
        case SOCKET_CONNECTION_FAIL:
        default:
            return state
    }
}

export default changeSocketState