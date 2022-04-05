import './App.css';
import React from "react";
import Header from './components/Header/index';
import pic from './components/image/smarthome.jpg';
import { FaHouseUser } from "react-icons/fa";
import {BrowserRouter as Router, Switch, Route, Routes, Link, Redirect} from 'react-router-dom';
import Rooms from "./components/Rooms/index";
import Menu from './components/Menu/index';
import Gas from './components/Gas/index';
import Temp_Humid from './components/Temp&Humid/index';
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="main">
        <img src={pic} alt="pic" />

        <div className='login'>
          <span className='dot'>
            <FaHouseUser className='logo' />
          </span>
          <div className='form_title'>
            
          </div>
          <form></form>
        </div>
      </div>

      {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage}>a</Route>
          <Route path="/about" component={Temp_Humid} />
          <Route path="/contactus" component={Gas} />
          <Redirect to="/" />
        </Switch>
      </Router> */}
      
      {/* <Menu/>
      <Rooms />
      <Gas />
      <Temp_Humid/> */}
      
    </div>
  );
}

export default App;
