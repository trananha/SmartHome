
import './index.css';
import {rooms} from '../Overview/index'

function genARoom(roomItem) {
    const light = roomItem.light === 1? 'ON': 'OFF'
    return(
        <tr>
            <td>{roomItem.id}</td>
            <td>{roomItem.name}</td>
            <td>{light}</td>
            <td>{roomItem.time}</td>
            <td>{roomItem.device}</td>
        </tr>
    );
}
function Light() {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Room</th>
                    <th>Light</th>
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

export default Light;