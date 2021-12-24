import React, {useEffect, useState} from 'react'
import "./Profile.css"
import {StNav, Event, Club} from "../../../Components"
import {confirm} from "react-confirm-box";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    let history = useHistory();
    const [clubs, setmyClubs] = useState([]);
    const studentId = localStorage.getItem("id");
    const [events, setmyEvents] = useState([]);
    const [studentName, setStudentName] = useState('');
    const[studentGe250, setStudentGe250] = useState(0);

    const deleteProfile = async () => {
        const result = await confirm("Are you sure you want to delete your account?");
        if (result) {
            console.log("You click yes!");
            console.log(localStorage.id)
            fetch("http://localhost:8080/auth/deleteStudent" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`,
            },
            body: JSON.stringify(
                {id: localStorage.id    }
            ),
            
            credentials: "include"
        }, ).then((r) => {
            if (r.ok) {
                history.push("/")
                localStorage.clear()
                console.log(r);
                window.location.reload()
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            }
            return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setmyEvents(r)
        }).catch((e) => {
            console.log(e.message);
        });
            return;
        }
        console.log("You click No!");
    };

    useEffect(() => {

        fetch("http://localhost:8080/auth/getStudentInfo?id=" + studentId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`
            },
            credentials: "include"
        }).then((r) => {
            if (r.ok) {
                console.log(r);
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            } else {
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            }
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setStudentName(r.name);
            setStudentGe250(r.ge250);

        }).catch((e) => {
            console.log(e.message);
        });
    }, []);

    useEffect(() => {

        fetch("http://localhost:8080/club/getStudentClub?id=" + studentId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`
            },
            credentials: "include"
        }).then((r) => {
            if (r.ok) {
                console.log(r);
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            } else {
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            }
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setmyClubs(r)

        }).catch((e) => {
            console.log(e.message);
        });
    }, []);

    useEffect(() => {

        fetch("http://localhost:8080/event/myEvents?id=" + studentId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`
            },
            credentials: "include"
        }, console.log("olmayan")).then((r) => {
            if (r.ok) {
                console.log(r);
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            }
            return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setmyEvents(r)
        }).catch((e) => {
            console.log(e.message);
        });
    }, []);

    
    return (
        <div className="st-body-grid">
            <div className="flex_cont">
                <button onClick={deleteProfile}
                    className="btn btn-primary btn-block del_my_acc">
                    Delete My Account
                </button>
                <div className="container">
                    <div className="row header_bio">
                        <div className="col-md-4 header_left">
                            <img className="pp_class"
                                src={
                                    localStorage.pp
                                }/>
                        </div>
                        <div className="col-md-8 ">
                            <div className="header_right">
                                <h3>{
                                    studentName
                                }</h3>
                                <p>GE 250: {
                                    studentGe250
                                }</p>
                                <Link to={{pathname:'/editStudentProfile', state:{
                                    name:studentName,
                                    ge250: studentGe250,
                                }}}>
                                <button  className="btn btn-primary btn-block">Edit Profile</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="profile_clubs col-lg-6">
                        {
                        clubs.map((club) => (
                            // TODO
                            // if (club.description.length() > 15)
                            //    club.description = club.description[0:15] + "..."; 
                            <Club name={
                                    club.name
                                }
                                upcoming_events={
                                    club.upcoming_events
                                }
                                total_events={
                                    club.total_events
                                }
                                description={
                                    club.description
                                }
                                pp={
                                    club.pp
                                }/>
                        ))
                    } </div>
                    <div className="profile_events col-lg-6">
                        {
                        events.map((event) => (
                            <Event club={
                                    event.club
                                }
                                name={
                                    event.name
                                }
                                mode={
                                    event.mode
                                }
                                description={
                                    event.description
                                }
                                img={
                                    event.img
                                }/>
                        ))
                    } </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
