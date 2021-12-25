import React, {useState, useEffect} from 'react';
import {Event} from "../../../Components"

const ClHome = () => {

    const [viewAllEvents, setViewAllEvents] = useState(true);
    const [events, setEvents] = useState([]);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/event/allEvents", {
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
            } else if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            } else {
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            }
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setEvents(r)

        }).catch((e) => {
            console.log(e.message);
        });

        fetch("http://localhost:8080/event/clubEvents?id=" + localStorage.getItem('clubId')  , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`,
               
            },
            credentials: "include"
        }).then((r) => {
            if (r.ok) {
                console.log(r);
                return r;
            } else if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            } else {
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            }
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setMyEvents(r)

        }).catch((e) => {
            console.log(e.message);
        });

    }, []);

    return (

        <div>
            <div className="dflex m-3 d-flex justify-content-center">
                <button className="btn btn-primary btn-block mx-3"
                    onClick={
                        () => {
                            setViewAllEvents(true)
                        }
                }>All Events</button>
                <button className="btn btn-primary btn-block"
                    onClick={
                        () => {
                            setViewAllEvents(false)
                        }
                }>My Events</button>
            </div>
            <div className="st-notifications">
                {
                viewAllEvents ? events.map((event) => (
                    <Event id={event.eventId} club={
                            event.club
                        }
                        name={
                            event.name
                        }
                        quota={
                            event.quota
                        }
                        description={
                            event.description
                        }
                        img={
                            event.img
                        }/>
                )) : myEvents.map((event) => (
                    <Event 
                        isStudent = {false}
                        isClub = {true}
                        isAdvisor={false}
                        id={event.eventId}
                        status={
                            event.status
                        }    
                        club={
                            event.club
                        }
                        name={
                            event.name
                        }
                        quota={
                            event.quota
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
    )
}

export default ClHome
