import './index.css';
import livingroom from './livingroom.jpg'
import {roomAction} from '../../actions/roomsActions';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function genRoom(roomItem) {
    return(
        <div className="room">
            <img src= {livingroom} alt="room" />
            <h4>{roomItem.name}</h4>
            <div className="data">
                <div className="data-item">
                    <i className="fas fa-temperature-low"></i>
                    {roomItem.temp}<sup>o</sup>C
                </div>
                <div className="data-item">
                    <i className="fas fa-cloud-rain"></i>
                    {roomItem.humid *100}%
                </div>

            </div>
        </div>
    );
}


function Temp_Humid() {
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


export default Temp_Humid;