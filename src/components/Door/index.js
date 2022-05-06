
import './index.css';
import {rooms} from '../Overview/index'

function genARoom(roomItem) {
    const door = roomItem.door === 1? 'ON': 'OFF'
    return(
        <tr>
            <td>{roomItem.id}</td>
            <td>{roomItem.name}</td>
            <td>{door}</td>
            <td>{roomItem.time}</td>
            <td>{roomItem.device}</td>
        </tr>
    );
}
function Door() {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Room</th>
                    <th>Door</th>
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

export default Door;