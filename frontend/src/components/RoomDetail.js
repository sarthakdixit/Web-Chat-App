import React from 'react'

const RoomDetail = ({id, name, date, onDelete}) => {
    return (
        <div className="container">
            <div className="inner-container">
                <h3>{name}</h3>
                <h6>{date}</h6>
                <div className="btn">
                    <button onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default RoomDetail
