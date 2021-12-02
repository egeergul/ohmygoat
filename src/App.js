import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Login, SignUp} from "./Auth"
import {StHome} from "./Pages/Student"
import {StNav} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRegistration from "./UserRegistration"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={StHome}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;