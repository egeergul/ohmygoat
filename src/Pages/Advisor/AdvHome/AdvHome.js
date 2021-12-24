import React, {useEffect, useState} from 'react'
import {Event} from "../../../Components"
import "./AdvHome.css"

const AdvHome = () => {

    const [feed, setFeed] = useState([]);
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
            var myClubsEvents = r.filter(event => event.clubId == localStorage.clubId)
            setFeed(myClubsEvents)

        }).catch((e) => {
            console.log(e.message);
        });
    }, []);

    return (
        <div> {/*
            name
            private int clubId;
        
            private String eventDate;
            private int duration;
            private String status;
            private String photos;* */}

            <div className="adv-home">
                {
                feed.map((event) => (
                    <Event eventId={
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
                        ge250={
                            event.ge250
                        }
                        remainingQuota={
                            event.remainingQuota
                        }
                        date={
                            event.eventDate
                        }
                        description={
                            event.description
                        }
                        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFk6kSNgK6Mhq9vrL-P6vQrHp60fJKYXuADtH8VAgPYEatKTBFt741R3SgLK_OwkkMRQ&usqp=CAU"}
                        startClock={
                            event.startClock
                        }
                        endClock={
                            event.endClock
                        }/>
                ))
            } </div>
        </div>
    )
}

export default AdvHome
