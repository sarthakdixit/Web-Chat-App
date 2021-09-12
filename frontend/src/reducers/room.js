import {ENTER_CHAT_ROOM_NAME, REMOVE_CHAT_ROOM_NAME} from '../actions/index';

const initialState = {
    chat_room: localStorage.getItem('chat_room')
};

const changeRoomState = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case ENTER_CHAT_ROOM_NAME:
            localStorage.setItem('chat_room', payload)
            return {
                ...state,
                chat_room : payload
            }
        case REMOVE_CHAT_ROOM_NAME:
            localStorage.removeItem("chat_room")
            return {
                ...state,
                chat_room : null
            }
        default:
            return state
    }
}

export default changeRoomState