import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Gas from './components/Gas/index';
import Temp_Humid from './components/Temp&Humid/index';
import HomePage from './components/Homepage';
import HeaderLogo from './components/HeaderLogo/index'
import Light from './components/Light/index';
import Door from './components/Door/index';
import SigninScreen from './components/User';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderLogo title={"SMART HOME FOR YOUR FUTURE"}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/temp_humid" component={Temp_Humid} />
          <Route path="/gas" component={Gas} />
          <Route path="/light" component={Light}/>
          <Route path="/door" component={Door}/>
          <Route path="/signin" component={SigninScreen}></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
