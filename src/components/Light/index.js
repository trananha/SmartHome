import livingroom from './livingroom.jpg';
import './index.css';
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
    if (roomItem.light === 1) return(
        <div className="room">
            <img src= {roomItem.img} alt="room" />
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
            <img src= {roomItem.img} alt="room" />
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
    return (
        <div className="roomContainer">
              {rooms.map( room => {
                  return genRoom(room);
              })}
        </div>
    )
}
export default Light;