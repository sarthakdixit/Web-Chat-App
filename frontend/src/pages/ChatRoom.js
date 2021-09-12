import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ChatRoomAction from '../components/ChatRoomAction';
import ChatRoom1 from '../components/ChatRoom';

const ChatRoom = () => {
    const myState = useSelector(state => state.changeRoomState)
    const [chatRoom, setChatRoom] = useState(false);

    useEffect(() => {
        if(myState.chat_room != null){
            setChatRoom(true);
        }else{
            setChatRoom(false);
        }
    }, [myState.chat_room])

    return (
        <div className="base chat-room">
            {chatRoom ? <ChatRoom1 roomName={myState.chat_room} /> : <ChatRoomAction action="Join" />}
        </div>
    )
}

export default ChatRoom
