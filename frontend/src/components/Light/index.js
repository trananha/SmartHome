import livingroom from './livingroom.jpg';
import './index.css';
import {roomAction} from '../../actions/roomsActions';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function genRoom(roomItem) {
    if (roomItem.light === 1) return(
        <div className="room">
            <img src= {livingroom} alt="room" />
            <h4>{roomItem.name}</h4>
            <div className="data">
                <label className="switch">
                    <input type="checkbox" checked/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
    else return (
        <div className="room">
            <img src= {livingroom} alt="room" />
            <h4>{roomItem.name}</h4>
            <div className="data">
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}


function Light() {
    const roomState= useSelector(state => state.rooms)
    const {loading, rooms, error} = roomState
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(roomAction());
        return () => {      
        }
    },[]);

    return (
        loading ? <div>Loading......</div>:
        error ? <div>{error.message}</div>:
        <div className="roomContainer">
              {rooms.map( room => {
                  return genRoom(room);
              })}
        </div>
    )
}
export default Light;