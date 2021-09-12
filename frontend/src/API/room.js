import { getStandardResponse } from '../utils/Response';
import { Config } from '../utils/Config';

export const RoomAPI = {
    verify : async (formData, token) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        }
        try{
            let res = await fetch(`${Config.base_url}/room/verify`, config);
            let resj = await res.json();
            if(resj.status){
                return getStandardResponse(true, resj.message, null, null);
            }else{
                return getStandardResponse(false, resj.message, null, null);
            }
        }catch(e){
            return getStandardResponse(false, e.message, null, null);
        }
    },
    create : async (formData, token) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        }
        try{
            let res = await fetch(`${Config.base_url}/room/create-room`, config);
            let resj = await res.json();
            if(resj.status){
                return getStandardResponse(true, resj.message, null, null);
            }else{
                return getStandardResponse(false, resj.message, null, null);
            }
        }catch(e){
            return getStandardResponse(false, e.message, null, null);
        }
    },
    remove : async (formData, token) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        }
        try{
            let res = await fetch(`${Config.base_url}/room/delete-room`, config);
            let resj = await res.json();
            if(resj.status){
                return getStandardResponse(true, resj.message, null, null);
            }else{
                return getStandardResponse(false, resj.message, null, null);
            }
        }catch(e){
            return getStandardResponse(false, e.message, null, null);
        }
    },
    get : async (token) => {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        try{
            let res = await fetch(`${Config.base_url}/room/get-rooms`, config);
            let resj = await res.json();
            if(resj.status){
                return getStandardResponse(true, resj.message, resj.data, null);
            }else{
                return getStandardResponse(false, resj.message, null, null);
            }
        }catch(e){
            return getStandardResponse(false, e.message, null, null);
        }
    }
}