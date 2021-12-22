import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {BrowserRouter, Route, useHistory} from "react-router-dom";
import {Login, SignUp, Buffer} from "./Auth"
import PropTypes from 'prop-types';
import {Profile} from "./Pages/Student"
import {StHome, StNotifications, StClubs, StAssignments} from "./Pages/Student"
import {CreateClub, AdmHome} from "./Pages/Admin"
import { AdvHome, AdvNotifications, AdvClubMembers} from "./Pages/Advisor"
import {StNav, AdvNav, ClNav, Assignment, ClubProfile, AdmNav} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import UserRegistration from "./UserRegistration"
import {Navbar} from "react-bootstrap";
import useToken from './Auth/useToken';


function App() {
    
    //const {token, setToken} = useToken();
    
  

    if (!localStorage.getItem('token')) {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/signup"
                        component={SignUp}/>
                    <Route exact path="/"
                        component={Login}/>
                    <Route exact path="/redirecting"
                        component={Buffer}/>
                </BrowserRouter>
           
            </div>
        )
    }
    
    else if (localStorage.role == "ROLE_ADMIN") {
        return (
            <div className="">
                <BrowserRouter>
                    <AdmNav/>
                    <Route path="/home"
                        component={AdmHome}/>
                    <Route path="/create-club"
                        component={CreateClub}/>
                </BrowserRouter>
            </div>
        )
}    
    else if (localStorage.role == "ROLE_STUDENT") {
        
        if(localStorage.onclub ==   "false"){
            return (
                <div>
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
                        <Route path="/clubs">
                            <StClubs/>
                        </Route>
                        <Route path="/assignments"
                            component={StAssignments}/>
                    </BrowserRouter>
                </div>
            );
        } else {
            return (
                <div>
                    <BrowserRouter>
                        <ClNav/>
                        <Route path="/club/home"
                            component={StHome}/>
                    </BrowserRouter>
                </div>
            );
        }

    } 
    

    
    
    else if (localStorage.role == "ROLE_ADVISOR") {
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
