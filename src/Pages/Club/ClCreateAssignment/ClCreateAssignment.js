import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker"
import TimePicker from 'react-time-picker';
import InputSpinner from 'react-bootstrap-input-spinner'
import "./ClCreateAssignment.css"

const ClCreateAssignment = () => {
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState(new Date())
    const [members, setMembers] = useState([])
    useEffect(() => {
        const clubId = localStorage.clubId;
        fetch("http://localhost:8080/club/getRolesOfClub?id="+clubId, {
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
                console.log("ım here")
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            }
        }).then((r) => r.json()).then((r) => {
            console.log(r);

        }).catch((e) => {
            console.log(e.message);
        });    
    });



    return (
        <div className='create-assigment-container'>
            <div className="create-assignment">
                <div className="create-assignment-header">
                    <h3>Create New Assignment</h3>
                </div>
                <div className="create-assignment-body">
                    <form action="">
                            <div className="column col-md d-flex flex-column justify-content-center align-items-center ">
                                <h6> Select Due Date </h6>
                                <DatePicker 
                                    dateFormat="dd/MM/yyyy"
                                    selected ={dueDate} 
                                    onChange={(date) =>{setDueDate(date);}
                                }/>
                            </div>
                        <textarea rows="5" cols="60" type="text" className="mt-2 form-control" placeholder="Assignment Description"
                            onChange={
                                e => setDescription(e.target.value)
                        }></textarea>


              
                            <p>Please select your favorite Web language:</p>
                            <input type="radio" id="html" name="fav_language" value="member"/>
                            <label for="member">Member</label>
                            
               

                        <button className= "create-button mt-3 btn btn-primary btn-block" type="submit">Create Assignment</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ClCreateAssignment
