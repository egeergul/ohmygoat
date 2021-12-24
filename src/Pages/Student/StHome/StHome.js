import React, {useEffect, useState} from 'react'
import {StNav, Event} from "../../../Components"
import "./StHome.css"

const StHome = () => {
    const [events, setEvents] = useState([]);
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
    }, []);


    return (
        <div >
            <div className="st-home">
                {
                events.map((event) => (
                    <Event 
                        eventId = {
                            event.eventId
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
                        remainingQuota = {
                            event.remainingQuota
                        }
                        date={
                            event.eventDate
                        }
                        description={
                            event.description
                        }
                        img={
                            "https://i.pinimg.com/736x/b2/8a/ee/b28aee3a7e645b68bcebc83f780af2a5.jpg"
                        }
                        startClock = {
                            event.startClock
                        }
                        endClock = {
                            event.endClock
                        }/>
                        
                ))
            } </div>
        </div>

    )
}


export default StHome
