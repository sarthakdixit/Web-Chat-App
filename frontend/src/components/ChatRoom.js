import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { REMOVE_CHAT_ROOM_NAME} from '../actions/index';
import {ChatAPI} from '../API/chat'
import { toast } from 'react-toastify';
import MessageBox from './MessageBox';
import { encrypt } from '../utils/Message';

const ChatRoom = ({roomName}) => {
    const dispatch = useDispatch();
    const myState = useSelector(state => state.changeAuthState)
    const mySocket = useSelector(state => state.changeSocketState)
    const [message, setMessage] = useState("")
    const [messageArr, setMessageArr] = useState([]);

    useEffect(() => {
        // console.log(messageArr)
        getMessages()
        mySocket.socket.on(roomName, (arg) => {
            setMessageArr(prevArr => [arg, ...prevArr])
        });
    }, [])

    const socketSendMessage = (obj) => {
        let socket = mySocket.socket;
        socket.emit("sendMessage", {
            roomName, obj
        });
    }

    const getMessages = async () => {
        let res = await ChatAPI.getMessages(roomName)
        if(res.status){
            setMessageArr(res.data)
        }else{
            toast.error(res.mssg)
        }
    }
    
    const removeChatRoomName = () => {
        dispatch({ type: REMOVE_CHAT_ROOM_NAME, payload:null })
    }

    const inputOnChange = (e) => {
        setMessage(e.target.value)
    }

    const postDatabase = async () => {
        let encryptMssg = encrypt(message);
        let res = await ChatAPI.sendMessage({message: encryptMssg}, myState.accessToken, roomName)
        if(res.status){
            setMessage("")
            let obj = {user:{name:myState.name}, message: encryptMssg, createdAt:new Date()}
            socketSendMessage(obj)
            setMessageArr(prevArr => [obj, ...prevArr])
        }else{
            toast.error(res.mssg)
        }
    }

    return (
        <div className="inner room">
            <div className="at-middle container">
                <div className="at-middle header">
                    <h4 className="none-pointer" title="Chat Room Name">{roomName}</h4>
                </div>
                <div className="at-middle header">
                    <i className="fas fa-times" title="Close" onClick={removeChatRoomName}></i>
                </div>
            </div>
            <div className="container">
                {messageArr.length != 0 && messageArr.map((item, id) => <MessageBox key={id} name={myState.name} obj={item} />) }
            </div>
            <div className="at-middle container">
                <div className="at-middle bottom">
                    <input placeholder="Enter Message" value={message} onChange={(e) => inputOnChange(e)} />
                </div>
                <div className="at-middle bottom">
                    <div className="at-middle" title="Send">
                        <i className="fas fa-caret-right" onClick={postDatabase}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom
