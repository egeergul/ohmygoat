import React, {useState} from 'react'
import "./Club.css"

const Club = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const clubId = props.id;
        
        // if club is not joined, join club
        if(JSON.stringify(props.isMember) == "[]") {
            fetch("http://localhost:8080/club/joinClub", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {studentId: localStorage.id,clubId: clubId}
            )
            }).then((r) => {
                console.log(r);
                if (r.ok) {
                    window.location.reload();
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("hata oluştu"));
                }
                return Promise.reject(new Error("bilinmeyen hata"));
            }).then((r) => r.json()).then((response) => {
                console.log(response);
            }).catch((e) => {
                console.log("here");
            });
        } else { //else leave club

            fetch("http://localhost:8080/club/leaveClub", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    {studentId: localStorage.id,clubId: clubId}
                )
                }).then((r) => {
                    console.log(r);
                    if (r.ok) {
                        window.location.reload();
                        return r;
                    }
                    if (r.status === 401 || r.status === 403 || r.status === 500) {
                        return Promise.reject(new Error("hata oluştu"));
                    }
                    return Promise.reject(new Error("bilinmeyen hata"));
                }).then((r) => r.json()).then((response) => {
                    console.log(response);
                }).catch((e) => {
                    console.log("here");
                });
        }
    };
    return (
        <div>
            <div className="club-container">
            
                <div className="club-header">
                    <img className="pp"
                        src={
                            props.pp
                        }/>
                    <p>{
                        props.name
                    }</p>
                </div>
                <div className="club-body">
                    <p>Chess Club  | {props.total_events} Total Events</p>
                    <div className="container">
                        <div className="club-body-bottom row">
                            <div className="col-md-8 club-body-left">
                                <p> {
                                    props.description
                                } </p>
                            </div>
                            <form className="col-md-2 club-body-right" onSubmit={handleSubmit}>
                                {
                                    JSON.stringify(props.isMember) == "[]" ?
                                    <button className="btn btn-primary btn-block">Join</button>
                                    :
                                    <button className="btn btn-primary btn-block">Leave</button> 
                                }
                                <button className="btn btn-primary btn-block">Visit Club</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Club
