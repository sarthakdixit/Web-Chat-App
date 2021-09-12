import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ENTER_CHAT_ROOM_NAME } from '../actions/index';
import {RoomAPI} from '../API/room'
import { toast } from 'react-toastify';

const ChatRoomJoin = ({action}) => {
    const dispatch = useDispatch();
    const myState = useSelector(state => state.changeAuthState)
    const [chatRoom, setChatRoom] = useState("");

    const inputOnChange = (e) => {
        setChatRoom(e.target.value)
    }

    const joinChatRoom = () => {
        dispatch({ type: ENTER_CHAT_ROOM_NAME, payload:chatRoom })
    }

    const verifyRoom = async () => {
        let res = await RoomAPI.verify({name:chatRoom}, myState.accessToken)
        if(res.status){
            if(action === "Join"){
                joinChatRoom()
            }else{
                toast.error(res.mssg)
            }
        }else{
            if(action === "Join"){
                toast.error(res.mssg)
            }else{
                createChatRoom()
            }
        }
    }

    const createChatRoom = async () => {
        let res = await RoomAPI.create({name:chatRoom}, myState.accessToken)
        if(res.status){
            toast.success(res.mssg);
        }else{
            toast.error(res.mssg);
        }
        setChatRoom("");
    }

    return (
        <div className="inner no-room">
                <h2 className="heading">{action === "Join" ? "JOIN" : "CREATE"} CHAT ROOM</h2>
                <div className="at-middle input-container">
                    <input placeholder="Enter Chat Room Name" value={chatRoom} onChange={(e) => inputOnChange(e)}/>
                </div>
                <div className="at-middle btn-container">
                    <button onClick={verifyRoom}>{action}</button>
                </div>
            </div>
    )
}

export default ChatRoomJoin
