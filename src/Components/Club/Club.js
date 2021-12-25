import React, {useState, useEffect} from 'react'
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

        fetch("http://localhost:8080/club/clubView?id=" + clubId, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`
            },
            
        }).then((r) => {
            console.log(r);
            if (r.ok) {
               
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("hata oluştu"));
            }
            return Promise.reject(new Error("bilinmeyen hata"));
        }).then((r) => r.json()).then((r) => {
            
            const clubRoles = r[0].roles;
            const role = clubRoles.filter(x=> x.studentId == localStorage.id)
            const roleSt = (role[0]["name"])
            console.log(roleSt)
            
            return roleSt
        }).catch((e) => {
            console.log("here is a problem: " + e);
        }).then(
            (role)=> {
                if(JSON.stringify(props.isMember) == "[]" || role.toString() =="MEMBER"){ //is not a member or regular member
                    console.log("no member or regular")
                    localStorage.setItem("clubId", clubId)
                    props.setNav2(2)
                    history.push("/view-club");
                    
                } else { // active member or higher member
                    console.log("acitve or higher")
                    localStorage.setItem("onclub", "true");
                    localStorage.setItem("clubId", clubId);
                    localStorage.setItem("roleOfStudent", role);
                    console.log(role)
                    history.push("/club/home");
                    window.location.reload();
                   
                }
            }
        )

       
       
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
