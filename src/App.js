import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Login, SignUp} from "./Auth"

import {Profile} from "./Pages/Student"
import {StHome, StNotifications, StClubs, StAssignments} from "./Pages/Student"
import {HomePage,CreateClub} from "./Pages/Admin"
import {StNav, Assignment} from "./Components"
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
                        <Profile pp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKLehlQVLtvwtdN6ml4nyhaoZ5PrkdI1fBQ&usqp=CAU"}
                            name={"can"}
                            ge250_251={"taken"}
                            bio={"Nisi excepteur do cupidatat duis qui sunt."}/>
                    </Route>
                    <Route exact path="/clubs"
                        component={StClubs}/>
                    <Route exact path="/assignments"
                        component={StAssignments}/>
                    <Route exact path="/homepage"
                        component={HomePage}/>
                    <Route exact path ="/createclub"
                        component = {CreateClub}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
