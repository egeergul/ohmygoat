import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Login, SignUp} from "./Auth"
import PropTypes from 'prop-types';
import {Profile} from "./Pages/Student"
import {StHome, StNotifications, StClubs, StAssignments} from "./Pages/Student"
import {StNav, Assignment} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';


import UserRegistration from "./UserRegistration"
import {Navbar} from "react-bootstrap";
import useToken from './Auth/useToken';


function App() {
    const {token, setToken} = useToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className="">
            <BrowserRouter>
                <StNav/>
                <Route exact path="/"
                    component={StHome}/>
                <Route path="/myProfile">
                    <Profile pp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKLehlQVLtvwtdN6ml4nyhaoZ5PrkdI1fBQ&usqp=CAU"}
                        name={"can"}
                        ge250_251={"taken"}
                        bio={"Nisi excepteur do cupidatat duis qui sunt."}/>
                </Route>
                <Route path="/notifications"
                    component={StNotifications}/>
                <Route path="/clubs"
                    component={StClubs}/>
                <Route path="/assignments"
                    component={StAssignments}/>

            </BrowserRouter>
        </div>


    );
}


export default App;
/* <Switch>
                    
                    <Route exact path="/home"
                        component={StHome}/>
                    
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
                </Switch>
* */
