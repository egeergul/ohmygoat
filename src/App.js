import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Login} from "./Auth"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;