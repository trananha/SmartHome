import './index.css';
//import {BrowserRouter as Router, Switch, Route, Routes, Link, Redirect} from 'react-router-dom';
// Fake data
export const rooms = [
    {
        id: 1,
        name: 'Living Room',
        temp: 40,
        humid: 0.23,
        gas: 0.2,
        door: 1,
        light: 0,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 2,
        name: 'Kitchen',
        temp: 40,
        humid: 0.4,
        gas: 0.5,
        door: 0,
        light: 1,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 3,
        name: 'Library',
        temp: 24,
        humid: 0.4,
        gas: 0.8,
        door: 1,
        light: 1,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 4,
        name: 'Bedroom 1',
        temp: 15,
        humid: 0.7,
        gas: 0.3,
        door: 0,
        light: 0,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 5,
        name: 'Bedroom 2',
        temp: 33,
        humid: 0.3,
        gas: 0.1,
        door: 0,
        light: 0,
        time: '21:09 4/25/2022',
        device: 1
    }
]


function genARoom(roomItem) {
    const light = roomItem.light === 1? 'ON': 'OFF'
    const door = roomItem.door === 1? 'ON': 'OFF'
    return(
        <tr>
            <td>{roomItem.id}</td>
            <td>{roomItem.name}</td>
            <td>{roomItem.temp}</td>
            <td>{roomItem.humid}</td>
            <td>{roomItem.gas}</td>
            <td>{light}</td>
            <td>{door}</td>
        </tr>
    );
}
function Overview() {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Room</th>
                    <th>Temp</th>
                    <th>Humid</th>
                    <th>Gas</th>
                    <th>Light</th>
                    <th>Door</th>
                </tr>
                {rooms.map(room => {
                    return genARoom(room);
                })}
            </table>
        </div>
        
    )
}


export default Overview;