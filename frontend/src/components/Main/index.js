import './index.css';
import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import Rooms from "../Rooms/index";
import Menu from '../Menu/index';
import HeaderLogo from '../Main/index';
import pic from './smarthome.jpg';
import { FaHouseUser } from "react-icons/fa";

function HomePage() {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin;
    
    return (
        <div className="App">
            <div className="main">
                <img src={pic} alt="pic" />
                
                <div className='login'>
                    <Link to="./signin">
                        <button>Sign in</button>
                    </Link>
                    <span className='dot'>
                        <FaHouseUser className='logo' />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomePage;