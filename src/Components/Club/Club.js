import React, {useState} from 'react'
import "./Club.css"
import { useHistory} from 'react-router-dom'
const Club = (props) => {
    const clubId = props.id;
    let history = useHistory();
    const joinClub = () => {

        fetch("http://localhost:8080/club/joinClub", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {studentId: localStorage.id, clubId: clubId}
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

    };

    const leaveClub = () => {
        fetch("http://localhost:8080/club/leaveClub", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {studentId: localStorage.id, clubId: clubId}
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
            console.log("here is a problem: " + e);
        });
    }

    const visitClub = () => {
        if(JSON.stringify(props.isMember) != "[]"){ //is a member
            localStorage.setItem("onclub", "true");
            localStorage.setItem("clubId", clubId);
            history.push("/club/home");
            window.location.reload();
        } else { // not a member

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
                    <p>{props.total_events} {'\u00A0'} Total Events</p>
                    <div className="container">
                        <div className="club-body-bottom row">
                            <div className="col-md-8 club-body-left">
                                <p> {
                                    props.description
                                } </p>
                            </div>
                            <div className="col-md-2 club-body-right">
                                {
                                JSON.stringify(props.isMember) == "[]" ? <button onClick={joinClub}
                                    className="btn btn-primary btn-block">Join</button> : <button onClick={leaveClub}
                                    className="btn btn-primary btn-block">Leave</button>
                            }
                                <button onClick={visitClub}
                                    className="btn btn-primary btn-block">Visit Club</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Club
