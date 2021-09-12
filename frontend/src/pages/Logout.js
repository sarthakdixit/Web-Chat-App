import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    LOGOUT,
    SOCKET_CONNECTION_REMOVE,
    REMOVE_CHAT_ROOM_NAME
} from "../actions/index";
import { Link, Redirect } from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch();
    const socketState = useSelector(state => state.changeSocketState)

    useEffect(() => {
        dispatch({ type: LOGOUT, payload:null })
        dispatch({ type: SOCKET_CONNECTION_REMOVE, payload:null })
        dispatch({ type: REMOVE_CHAT_ROOM_NAME, payload:null })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Logout
