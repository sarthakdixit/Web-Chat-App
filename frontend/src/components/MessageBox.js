import React from 'react'
import { decrypt, getDateAndTime } from '../utils/Message';

const MessageBox = ({obj, name}) => {
    return (
        <div className="message-box" style={{borderLeftColor:`${obj.user.name === name ? 'rgb(0,33,71)' : 'red'}`}}>
            <h6 style={{color:`${obj.user.name === name ? 'rgb(0,33,71)' : 'red'}`}}>{obj.user.name} || <small style={{color:`${obj.user.name === name ? 'rgb(0,33,71)' : 'red'}`}}>{getDateAndTime(obj.createdAt)}</small> </h6>
            <p style={{color:`${obj.user.name === name ? 'red' : 'rgb(0,33,71)'}`}}>{decrypt(obj.message)}</p>
        </div>
    )
}

export default MessageBox
