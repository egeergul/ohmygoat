import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {BrowserRouter, Route, useHistory} from "react-router-dom";
import {Login, SignUp} from "./Auth"
import PropTypes from 'prop-types';
import {Profile} from "./Pages/Student"
import {StHome, StNotifications, StClubs, StAssignments} from "./Pages/Student"
import { AdvHome, AdvNotifications, AdvClubMembers} from "./Pages/Advisor"
import {StNav, AdvNav, Assignment, ClubProfile} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import UserRegistration from "./UserRegistration"
import {Navbar} from "react-bootstrap";
import useToken from './Auth/useToken';


function App() {

    let userType = 1;
    
    const {token, setToken} = useToken();
    let history = useHistory();

    if (!localStorage.getItem('token')) {
        console.log('fsdfdshfj');
        return (
            <div>
                <Login setToken={setToken}/>
            </div>
        )
    } else if (userType == 1) {
        console.log('djfhdsjjhd');
        return (
            <div className="">
                <BrowserRouter>
                    <StNav/>
                    <Route path="/home"
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

    } else if (userType == 2) {
        return (
            <div className="">
                <BrowserRouter>
                    <AdvNav/>
                    <Route path="/home"
                        component={AdvHome}/>
                    <Route path="/notifications"
                        component={AdvNotifications}/>
                    <Route path="/club-members"
                        component={AdvClubMembers}/>
                    <Route path="/view-club"
                        component={ClubProfile}/>


                  


                </BrowserRouter>
            </div>


        )

    }


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
