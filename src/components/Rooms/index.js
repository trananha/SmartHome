import './index.css';
import livingroom from './livingroom.jpg'
const rooms = [
    {
        id: 1,
        name: 'Living Room',
        img: livingroom
    },
    {
        id: 2,
        name: 'Kitchen',
        img: livingroom
    },
    {
        id: 3,
        name: 'Library',
        img: livingroom
    },
    {
        id: 4,
        name: 'Bedroom 1',
        img: livingroom
    },
    {
        id: 5,
        name: 'Bedroom 2',
        img: livingroom
    }
]


function genRoom(roomItem) {
    return(
        <div className="room">
            <img src= {roomItem.img} alt="room" />
            <h4>{roomItem.name}</h4>
            
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