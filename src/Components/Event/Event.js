import React from 'react'
import "./Event.css"

const Event = (props) => {
    const eventId = props.eventId;

    const joinEvent = ()=> {
        const studentId = localStorage.getItem("id");
        console.log(studentId);
        console.log(eventId);
        fetch("http://localhost:8080/event/joinEvent" , {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${
                        localStorage.token
                    }`
                },

                body: JSON.stringify(
                    {studentId, eventId}
                )

        }).then((r) => {
            if (r.ok) {
                console.log(r);
                
                return r;
            } else if (r.status === 401 || r.status === 403 || r.status === 500) {
                
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            } else {
                console.log(r);

                console.log("ım here")
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            }
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            window.alert(r.message);
            window.location.reload()

        }).catch((e) => {
            console.log(e.message);
        });    
    }

    const leaveEvent = ()=> {
        const studentId = localStorage.getItem("id");
        console.log(studentId);
        console.log(eventId);
        fetch("http://localhost:8080/event/leaveEvent" , {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${
                        localStorage.token
                    }`
                },

                body: JSON.stringify(
                    {studentId, eventId}
                )

        }).then((r) => {
            if (r.ok) {
                console.log(r);
                
                return r;
            } else if (r.status === 401 || r.status === 403 || r.status === 500) {
                
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            } else {
                console.log(r);

                console.log("ım here")
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            }
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            window.alert(r.message);
            window.location.reload()

        }).catch((e) => {
            console.log(e.message);
        });    
    }



    return (
        <div>
            <div className="event-container">
                <div className="event-header">
                    <p>{
                        props.club
                    }</p>
                    <div className="d-flex flex-column ">
                    <p>{
                        props.name
                    }</p>
                    <p>GE 250/251: {'\u00A0'} {
                        props.ge250
                    }</p>
                    </div>
                    <div className="d-flex flex-column">
                        <p>Max Quota: {
                            props.quota
                        }</p>
                        <p>Available Quota: {props.remainingQuota}</p>
                    </div>
                </div>
                <div >
                    
                   <div className="event-body">
                   <div className="container">
                   <div className="row">
                        
                       </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={
                                        props.img
                                    }
                                    className="event-img"/>
                            </div>
                            <div className="col-lg-8">
                                <div className="event-body-right">
                                    <p >Event Date: {props.date}</p>
                                    <p >from {props.startClock} to {props.endClock}</p>
                                    <p>{
                                        props.description
                                    }</p>
                                    {
                                        props.isInEvent ? 
                                        <button onClick={leaveEvent} className="btn btn-primary btn-block">Leave Event</button>
                                        :
                                        <button onClick={joinEvent} className="btn btn-primary btn-block">Join Event</button>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Event
