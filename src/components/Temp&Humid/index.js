import './index.css';
import {rooms} from '../Overview/index'

// const rooms = [
//     {
//         id: 1,
//         name: 'Living Room',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 2,
//         name: 'Kitchen',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 3,
//         name: 'Library',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 4,
//         name: 'Bedroom 1',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 5,
//         name: 'Bedroom 2',
//         img: livingroom,
//         temp: 222,
//         humid: 0.6
//     }
// ]
function genARoom(roomItem) {
    return(
        <tr>
            <td>{roomItem.id}</td>
            <td>{roomItem.name}</td>
            <td>{roomItem.temp}<sup>o</sup>C</td>
            <td>{roomItem.humid *100}%</td>
            <td>{roomItem.time}</td>
            <td>{roomItem.device}</td>
        </tr>
    );
}
function Temp_Humid() {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Room</th>
                    <th>Temp</th>
                    <th>Humid</th>
                    <th>Last access</th>
                    <th>Device</th>
                </tr>
                {rooms.map(room => {
                    return genARoom(room);
                })}
            </table>
        </div>
        
    )
}


export default Temp_Humid;