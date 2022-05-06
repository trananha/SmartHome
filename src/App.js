import './App.css';
import React from "react";
import Header from './components/Header/index';
import pic from './components/image/smarthome.jpg';
import { FaHouseUser } from "react-icons/fa";
import {BrowserRouter as Router, Switch, Route, Routes, Link, Redirect} from 'react-router-dom';
import Menu from './components/Menu/index';
import Gas from './components/Gas/index';
import Temp_Humid from './components/Temp&Humid/index';
import Login from './components/Login/index';
import HomePage from './components/Homepage/index'
import Overview from './components/Overview/index';
import HeaderLogo from './components/HeaderLogo/index'
import Light from './components/Light/index';
import Door from './components/Door/index';
function App() {
  return (
    <div className="App">
      <HeaderLogo title={"SMART HOME FOR YOUR FUTURE"}/>
      
      <div className="home">
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/temp_humid" component={Temp_Humid} />
                <Route path="/gas" component={Gas} />
                <Route path="/light" component={Light}/>
                <Route path="/door" component={Door}/>
                <Redirect to="/" />
            </Switch>
        </Router>
        
      </div>
      
      
      
      
    </div>
  );
}

export default App;
