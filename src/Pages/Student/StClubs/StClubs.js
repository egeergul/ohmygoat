import React, {useState, useEffect} from 'react'
import "./StClubs.css"
import {Club} from "../../../Components"
import { useHistory } from 'react-router-dom';

//TODO

const StClubs = (props) => { 
    const [clubs, setClubs] = useState([]);
    useEffect(() => {

        fetch(
            "http://localhost:8080/club/allClubs",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`,
                },
                credentials: "include",
            },
            )
            .then((r) => {
                if (r.ok) {
                    console.log(r);
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Bir hata oluştu " + r.status));
                }
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            })
            .then((r) => r.json())
            .then((r) => {
                console.log(r);
                setClubs(r)

            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

        const [my_clubs, setmyClubs] = useState([]);
        console.log(localStorage.getItem("id"));
        console.log(localStorage.id);
        const a = localStorage.getItem("id");
        useEffect(() => {

            fetch(
                "http://localhost:8080/club/getStudentClub?id=" + a,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.token
                        }`,
                    },
                    credentials: "include",
                },
            console.log("olmayan"))
                .then((r) => {
                    if (r.ok) {
                        console.log(r);
                        return r;
                    }
                    if (r.status === 401 || r.status === 403 || r.status === 500) {
                        return Promise.reject(new Error("Bir hata oluştu " + r.status ));
                    }
                    return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
                })
                .then((r) => r.json())
                .then((r) => {
                    console.log(r);
                    setmyClubs(r)

                })
                .catch((e) => {
                    console.log(e.message);
                });
    }, []);


    const [isMyClubs, setMyClubs] = useState(true);
    let history = useHistory();
    var mapped = isMyClubs ? my_clubs : clubs;
    return (
        <div>
            <div>

                <button onClick={
                    () => {
                        localStorage.setItem("onclub", "true");
                        history.push("/club/home");
                        window.location.reload();

                    }
                }>click</button>
                <div className="dflex m-3 d-flex justify-content-center">
                    <button className="btn btn-primary btn-block mx-3"
                        onClick={
                            () => {
                                setMyClubs(true)
                            }
                    }>My Clubs</button>

                    <button className="btn btn-primary btn-block"
                        onClick={
                            () => {
                                setMyClubs(false)
                            }
                    }>All Clubs</button>
                </div>

                <div className="st-clubs">
                    {
                        clubs && 

                    mapped.map((club) => (
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
                            }
                            id={
                                  club.id
                              }/>
                    ))
                } </div>


            </div>
        </div>
    )}
    
export default StClubs
