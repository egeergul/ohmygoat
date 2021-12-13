import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Login, SignUp} from "./Auth"

import {Profile} from "./Pages/Student"
import {StHome, StNotifications, StClubs} from "./Pages/Student"
import {StNav, Notification} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';


import UserRegistration from "./UserRegistration"

function App() {


    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login"
                        component={Login}/>
                    <Route exact path="/"
                        component={Login}/>
                    <Route exact path="/home"
                        component={StHome}/>
                    <Route exact path="/signup"
                        component={SignUp}/>
                    <Route exact path="/notifications"
                        component={StNotifications}/>
                    <Route exact path="/myprofile">
                        <Profile pp={"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/66/669b47d15b87c16c9cd429a4e29a064dac892e01_full.jpg"}
                            name={"can"}
                            ge250_251={"taken"}
                            bio={"Nisi excepteur do cupidatat duis qui sunt."}/>
                    </Route>
                    <Route exact path="/clubs"
                        component={StClubs}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
