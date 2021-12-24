import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Login, SignUp, Buffer} from "./Auth"
import {Profile} from "./Pages/Student"
import {StHome, StNotifications, StClubs, StAssignments} from "./Pages/Student"
import {ClHome, CreateEvent, ClNotifications, ClAssignments, ClCreateAssignment} from "./Pages/Club"
import {CreateClub, AdmHome} from "./Pages/Admin"
import {AdvHome, AdvNotifications, AdvClubMembers} from "./Pages/Advisor"
import {
    StNav,
    AdvNav,
    ClNav,
    ClubProfile,
    AdmNav
} from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import EditProfile from './Pages/Student/Profile/EditProfile';


function App() { // If there are no logged in users, render this part

    const [nav, setNav] = useState(1);

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

    // If the logged in user is an admin, render this part else 
    else if ( localStorage.role == "ROLE_ADMIN") {
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

    // If the logged in user is a student, render this part else 
    if (localStorage.role == "ROLE_STUDENT") { 
        // If the student is not visiting the clubs system, render this part
        if (localStorage.onclub == "false") {
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
                        <Route path='/editStudentProfile'>
                            <EditProfile></EditProfile>
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
        }
        // If the student is  visiting the clubs system, render this part 
        else {
            return (
                <div>
                    <BrowserRouter>
                        <ClNav 
                            nav = {nav} 
                            setNav = {setNav}/>
                        <Route path="/club/home"
                            component={ClHome}/>
                        <Route path="/club/create-event">
                            <CreateEvent/>
                        </Route>
                        <Route path="/club/notifications"
                            component={ClNotifications}/>
                        <Route path="/club/assignments">
                            <ClAssignments
                                nav = {nav} 
                                setNav = {setNav}/>
                        </Route>
                        <Route path="/club/create-assignment"
                            component={ClCreateAssignment}/>
                    </BrowserRouter>
                </div>
            );
        }

    }
    // If the logged in user is an admin, render this part 
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
