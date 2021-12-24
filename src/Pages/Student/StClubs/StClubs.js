import React, {useState, useEffect} from 'react'
import "./StClubs.css"
import {Club} from "../../../Components"
import {useHistory} from 'react-router-dom';


const StClubs = (props) => {
    const [allClubs, setAllClubs] = useState([]);
    const [myClubs, setMyClubs] = useState([]);
    const stId = localStorage.getItem("id");
    const [viewMyClubs, setViewMyClubs] = useState(true);
    let history = useHistory();
    var mapped = viewMyClubs ? myClubs : allClubs;

    useEffect(() => {

        fetch("http://localhost:8080/club/allClubs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`
            },
            credentials: "include"
        },).then((r) => {
            if (r.ok) {
                console.log(r)
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            }
            return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setAllClubs(r)
            
           /* var data = []
            for(var i = 0; i < r.length; i++) {
                var obj = r[i];
                var filtered = obj.roles.filter(role => role.studentId == localStorage.getItem("id"));
                if(filtered.length == 0){
                    console.log("aslanım")
                    data.push(obj)

                }
                    
                console.log("ege")
                console.log(filtered);
                console.log("ege")
            }
            console.log(data)
            setMyClubs(data)* */

        }).catch((e) => {
            console.log(e.message);
        });


        
        fetch("http://localhost:8080/club/getStudentClub?id=" + stId, {
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
            } else 
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            
        }).then((r) => r.json()).then((r) => {
            console.log(r);
            setMyClubs(r)

        }).catch((e) => {
            console.log(e.message);
        });

    }, []);

   
    return (
        <div>
            <div>
                <div className="dflex m-3 d-flex justify-content-center">
                    <button className="btn btn-primary btn-block mx-3"
                        onClick={
                            () => {
                                setViewMyClubs(true)
                            }
                    }>My Clubs</button>

                    <button className="btn btn-primary btn-block"
                        onClick={
                            () => {
                                setViewMyClubs(false)
                            }
                    }>All Clubs</button>
                </div>

                <div className="st-clubs">
                    {
                    allClubs && mapped.map((club) => (
                        <Club name={
                                club.name
                            }
                            roles={
                                JSON.stringify(club.roles)
                            }
                            total_events={
                                club.numberOfEvents
                            }
                            description={
                                club.description
                            }
                            pp={
                                club.pp
                            }
                            id={
                                club.id
                            }
                            isMember={
                              myClubs.filter(a => a.id == club.id) 
                            }/>
                    ))
                } </div>


            </div>
        </div>
    )
}

export default StClubs
