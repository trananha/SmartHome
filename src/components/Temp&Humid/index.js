import './index.css';
import livingroom from './livingroom.jpg'

const rooms = [
    {
        id: 1,
        name: 'Living Room',
        img: livingroom,
        temp: 40,
        humid: 0.3
    },
    {
        id: 2,
        name: 'Kitchen',
        img: livingroom,
        temp: 40,
        humid: 0.3
    },
    {
        id: 3,
        name: 'Library',
        img: livingroom,
        temp: 40,
        humid: 0.3
    },
    {
        id: 4,
        name: 'Bedroom 1',
        img: livingroom,
        temp: 40,
        humid: 0.3
    },
    {
        id: 5,
        name: 'Bedroom 2',
        img: livingroom,
        temp: 222,
        humid: 0.6
    }
]

function genRoom(roomItem) {
    return(
        <div className="room">
            <img src= {roomItem.img}></img>
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
    return (
        <div className="roomContainer">
              {rooms.map( room => {
                  return genRoom(room);
              })}
        </div>
    )
}


export default Temp_Humid;