import './index.css';
import livingroom from './livingroom.jpg'
import InfoEachRoom from '../InfoEachRoom/index';
import {BrowserRouter as Router, Switch, Route, Routes, Link, Redirect} from 'react-router-dom';
// Fake data
const rooms = [
    {
        id: 1,
        name: 'Living Room',
        img: livingroom,
        temp: 40,
        humid: 0.3,
        gas: 0.2,
        door: 1,
        light: 0
    },
    {
        id: 2,
        name: 'Kitchen',
        img: livingroom,
        temp: 40,
        humid: 0.4,
        gas: 0.5,
        door: 0,
        light: 1
    },
    {
        id: 3,
        name: 'Library',
        img: livingroom,
        temp: 24,
        humid: 0.4,
        gas: 0.8,
        door: 1,
        light: 1
    },
    {
        id: 4,
        name: 'Bedroom 1',
        img: livingroom,
        temp: 15,
        humid: 0.7,
        gas: 0.3,
        door: 0,
        light: 0
    },
    {
        id: 5,
        name: 'Bedroom 2',
        img: livingroom,
        temp: 33,
        humid: 0.3,
        gas: 0.1,
        door: 0,
        light: 0
    }
]


function genRoom(roomItem) {
    return(

        <div className="room">
            <Link path= "./room">
                <img src= {roomItem.img} alt="room" />
                <h4>{roomItem.name}</h4>
            </Link>
            
            
        </div>
    );
}


function Rooms() {
    return (
        <div className="roomContainer">
              {rooms.map( room => {
                  return genRoom(room);
              })}

        </div>
    )
}


export default Rooms;