import { getStandardResponse } from '../utils/Response';
import { Config } from '../utils/Config';

export const ChatAPI = {
    sendMessage : async (formData, token, roomName) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        }
        try{
            let res = await fetch(`${Config.base_url}/chat/send-message/${roomName}`, config);
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
    getMessages : async (roomName) => {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            let res = await fetch(`${Config.base_url}/chat/all-chats/${roomName}`, config);
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