import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RoomAPI} from '../API/room'
import { toast } from 'react-toastify';
import RoomDetail from '../components/RoomDetail';

const MyRooms = () => {
    const dispatch = useDispatch();
    const myState = useSelector(state => state.changeAuthState)
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRooms();
    }, [])

    const getRooms = async () => {
        let res = await RoomAPI.get(myState.accessToken)
        if(res.status){
            setRooms(res.data);
        }else{
            toast.error(res.mssg);
        }
    }

    const onDelete = async (id) => {
        let res = await RoomAPI.remove({id}, myState.accessToken)
        if(res.status){
            let arr = [...rooms];
            let filterArr = arr.filter(item => item.id !== id)
            setRooms(filterArr);
            toast.success(res.mssg);
        }else{
            toast.error(res.mssg);
        }
    }

    return (
        <div className="base create-room">
            {rooms.map(item => <RoomDetail key={item.id} id={item.id} name={item.name} date={item.createdAt} onDelete={onDelete} />)}
        </div>
    )
}

export default MyRooms
