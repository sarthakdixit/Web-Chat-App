import {
    LOGIN_SUCCESS,
    LOGOUT,
} from "../actions/index";

const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    name: localStorage.getItem('authName')
};

const changeAuthState = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('accessToken', payload.accessToken);
            localStorage.setItem('authName', payload.name);
            return {
                ...state,
                accessToken: payload.accessToken,
                name: payload.name
            }
        case LOGOUT:
            localStorage.removeItem("accessToken")
            localStorage.removeItem('authName')
            return {
                ...state,
                accessToken: null,
                name: null
            }
        default:
            return state;
    }
}

export default changeAuthState