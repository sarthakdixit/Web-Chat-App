import{
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
} from './index';
import { Config } from '../utils/Config';
import { getStandardResponse } from '../utils/Response';

export const signup = async (formData) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    }
    try{
        let res = await fetch(`${Config.base_url}/auth/create-user`, config);
        let resj = await res.json();
        if(resj.status){
            return getStandardResponse(true, resj.message, null, SIGNUP_SUCCESS);
        }else{
            return getStandardResponse(false, resj.message, null, SIGNUP_FAIL);
        }
    }catch(e){
        return getStandardResponse(false, e.message, null, SIGNUP_FAIL);
    }
};

export const login = async (formData) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    }
    try{
        let res = await fetch(`${Config.base_url}/auth/login`, config);
        let resj = await res.json();
        if(resj.status){
            return getStandardResponse(true, resj.message, resj.data, LOGIN_SUCCESS);
        }else{
            return getStandardResponse(false, resj.message, null, LOGIN_FAIL);
        }
    }catch(e){
        return getStandardResponse(false, e.message, null, LOGIN_FAIL);
    }
};