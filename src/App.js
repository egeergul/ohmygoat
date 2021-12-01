import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Login, SignUp} from "./Auth"
import {StHome} from "./Pages/Student"
import {StNav} from "./Components"

import UserRegistration from "./UserRegistration"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/student">
            <StHome/>
          </Route> 
          <Route path="/sign-up">
            <SignUp/>
          </Route>  
          <Route path="/" exact>
            <Login/>
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;