import React, {useEffect, useState} from 'react'
import "./StAssignments.css"
import {StNav, Assignment} from "../../../Components"


const StAssignments = () => {

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {


        fetch("http://localhost:8080/assignment/getStudentAssignment?id=" + localStorage.getItem("id"), {
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
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            }
            return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
        }).then((r) => r.json()).then((r) => {
            console.log("here: " + r);
            console.log(r)
            setAssignments(r)


        }).catch((e) => {
            console.log(e.message);
        });



    }, []);

    return (
        <div>

            <div className="st-assignment">
                {
                    assignments.map((assignment) => (
                        <Assignment club={
                            assignment.clubName
                        }
                                    name ={assignment.name}
                                    assigned_to={
                                        "ali"
                                    }
                                    date={
                                        assignment.due_date.substring(0, assignment.due_date.indexOf("T"))
                                    }

                                    description={
                                        assignment.description
                                    }
                                    pp={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxciyGtNprXskRvTxL6sLgglWj5MXb5YQGcw&usqp=CAU"
                                    }/>
                    ))
                } </div>


        </div>
    )
}

export default StAssignments

