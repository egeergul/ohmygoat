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
            setEvents(r);

        }).catch((e) => {
            console.log(e.message);
        });

        fetch("http://localhost:8080/event/clubEvents?id=" + localStorage.getItem('clubId')  , {
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
            for(var i = 0; i < r.length; i++) {
                var obj = r[i];
                obj["club"] = localStorage.clubId ;
                
            }
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

                    <Event isStudent={false}
                        isClub={true}
                        isAdvisor={false}
                        status={
                            event.status
                        }
                        eventId={
                            event.eventId
                        }
                        club={
                            event.clubId
                        }
                        ge250={
                            event.ge250
                        }
                        eventId={event.eventId} 
                        club={
                            event.club

                        }
                        name={
                            event.name
                        }
                        quota={
                            event.quota
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

                        img={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEUxHkkqcJMuTnIxGUUxAEEl178xF0QxG0gtWXwxGkYvQ2gqdJctVXkxFUQvQGYxFUMsX4IuR2wvOF6QPzTkAAABhUlEQVR4nO3SW0oDARBE0cTHxDG+979YkfpTwYEgqU7OWUFdune7y3Z3f+4F/03hfArnUzifwvkUzqdwPoXzXWfhephrPWwoXPaDHZ+WLYXPy1TPLw+bCn9ceoz1UeEXhc0UhsJmCkNhM4WhsJnCUNhMYShspjAUNlMYCpspDIXNFIbCZgpDYTOFobCZwlDYTGEobKYwFDZTGAqbKQyFzRSGwmYKQ2EzhaGwmcJQ2ExhKGymMBQ2UxgKmykMhc0UhsJmCkNhM4WhsJnCUNhMYShspjAUNlMYCpspDIXNFIbCZgpDYTOFobCZwlDYTGEobKYwFDZTGAqbKQyFzRSGwmYKQ2EzhaGwmcJQ2ExhKGymMBQ2UxgKmykMhc0UhsJmCkNhM4WhsJnCUNhMYShspjAUNlMYCpspDIXNFIbCZgpDYTOFobCZwlDYTGEs+2W5Her1ZVPh8Wauty2F6/u5Z57iY/27cLee+9dO8T3w18LLonA+hfMpnE/hfArnUzifwvmuofAT+ck8h2oKjw0AAAAASUVORK5CYII="}
                        startClock={
                            event.startClock
                        }
                        endClock={
                            event.endClock
                        }
                        isInEvent={
                            !(myEvents.filter(a => a.eventId == event.eventId).length == 0)
                        }

                        img={
                            event.img
                        }
                        date={event.eventDate}
                        endClock={event.eventFinish}/>

                )) : myEvents.map((event) => (
                    <Event isStudent={false}
                        isClub={true}
                        isAdvisor={false}
                        eventId={event.eventId}
                        status={
                            event.status
                        }
                        eventId={
                            event.eventId
                        }
                        club={
                            event.club
                        }
                        ge250={
                            event.ge250
                        }
                        name={
                            event.name
                        }
                        quota={
                            event.quota
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

                        img={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEUxHkkqcJMuTnIxGUUxAEEl178xF0QxG0gtWXwxGkYvQ2gqdJctVXkxFUQvQGYxFUMsX4IuR2wvOF6QPzTkAAABhUlEQVR4nO3SW0oDARBE0cTHxDG+979YkfpTwYEgqU7OWUFdune7y3Z3f+4F/03hfArnUzifwvkUzqdwPoXzXWfhephrPWwoXPaDHZ+WLYXPy1TPLw+bCn9ceoz1UeEXhc0UhsJmCkNhM4WhsJnCUNhMYShspjAUNlMYCpspDIXNFIbCZgpDYTOFobCZwlDYTGEobKYwFDZTGAqbKQyFzRSGwmYKQ2EzhaGwmcJQ2ExhKGymMBQ2UxgKmykMhc0UhsJmCkNhM4WhsJnCUNhMYShspjAUNlMYCpspDIXNFIbCZgpDYTOFobCZwlDYTGEobKYwFDZTGAqbKQyFzRSGwmYKQ2EzhaGwmcJQ2ExhKGymMBQ2UxgKmykMhc0UhsJmCkNhM4WhsJnCUNhMYShspjAUNlMYCpspDIXNFIbCZgpDYTOFobCZwlDYTGEs+2W5Her1ZVPh8Wauty2F6/u5Z57iY/27cLee+9dO8T3w18LLonA+hfMpnE/hfArnUzifwvmuofAT+ck8h2oKjw0AAAAASUVORK5CYII="}
                        startClock={
                            event.startClock
                        }
                        endClock={
                            event.endClock
                        }
                        isInEvent={
                            !(myEvents.filter(a => a.eventId == event.eventId).length == 0)
                        }

                        img={
                            event.img
                        }
                        date={event.eventDate}
                        endClock={event.eventFinish}/>

                ))
            } </div>
        </div>
    )
}

export default ClHome
