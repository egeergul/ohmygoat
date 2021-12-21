import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {BrowserRouter, Route, useHistory} from "react-router-dom";
import {Login, SignUp} from "./Auth"
import PropTypes from 'prop-types';
import {Profile} from "./Pages/Student"
import {StHome, StNotifications, StClubs, StAssignments} from "./Pages/Student"
import {HomePage,CreateClub} from "./Pages/Admin"
import { AdvHome, AdvNotifications, AdvClubMembers} from "./Pages/Advisor"
import {StNav, AdvNav, Assignment, ClubProfile} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import UserRegistration from "./UserRegistration"
import {Navbar} from "react-bootstrap";
import useToken from './Auth/useToken';


function App() {
    
    //const {token, setToken} = useToken();
    let history = useHistory();

    if (!localStorage.getItem('token')) {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/signup"
                        component={SignUp}/>
                    <Route exact path="/"
                        component={Login}/>
                </BrowserRouter>
           
            </div>
        )
    } else if (localStorage.role == "ROLE_STUDENT") {
    //} else if (localStorage.role == "ROLE_") {
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

    } else if (localStorage.role == "ROLE_ADVISOR") {
    //} else if (localStorage.role == "ROLE_STUDENT") {
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

    } else if (localStorage.role == "ROLE_ADMIN") {
        //} else if (localStorage.role == "ROLE_STUDENT") {
            return (
                <div className="">
                    <BrowserRouter>
                        <AdvNav/>
                        <Route path="/home"
                            component={HomePage}/>
                        <Route path="/createclub"
                            component={CreateClub}/>
                    </BrowserRouter>
                </div>
            )


    }
}


export default App;
