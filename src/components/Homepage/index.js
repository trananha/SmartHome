import React from "react";
import { Link } from "react-router-dom";
import Rooms from "../Rooms/index";
import Menu from '../Menu/index';
import HeaderLogo from '../HeaderLogo/index';

function HomePage() {
    return (
        <div>
            {/* <HeaderLogo title="SMART HOME FOR YOUR FUTURE" /> */}
            <Menu />
            <Rooms />
        </div>
    );
}

export default HomePage;