import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Login, SignUp} from "./Auth"

import {Profile} from "./Pages/Student"
import {StHome, StNotifications} from "./Pages/Student"
import {StNav, Notification, Club} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';


import UserRegistration from "./UserRegistration"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={StHome}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/notifications" component={StNotifications}/>
          <Route exact path="/myprofile" component={Profile}/>
          <Route exact path="/clubs" component={Club}/>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;