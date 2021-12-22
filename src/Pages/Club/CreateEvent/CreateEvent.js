import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./CreateEvent.css"
import {useHistory} from "react-router-dom";

const CreateEvent = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    let history = useHistory();
    const handleSubmit = (event) => {
    

        if(name == "" || description == ""){
            window.alert("None of the fields can be left empty!")
        } else if(startDate - endDate > 0){
            window.alert("Start date cannot be before end date!")
        } else  {
            console.log("No bad credentials");
            event.preventDefault();
            fetch("http://localhost:8080/event/addEvent", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`,
                },
                body: JSON.stringify(

                    {name, description, clubId : 1, quota: 30, eventDate: startDate.toString() }
                )
            }).then((r) => {
                console.log(r);
                if (r.ok) {
                    console.log("I am okay")
                    history.push("/club/home")
                } else if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("hata oluştu"));
                } else {
                    return Promise.reject(new Error("bilinmeyen hata"));
                }
            })
        }
        
    }

    return (
        <div className='create-club-container'>
            <div className="crate-event">
                <div className="create-event-header">
                    <h3>Create Event</h3>
                </div>
                <div className="create-event-body ">
                    <form className="d-flex flex-column" onSubmit={handleSubmit}>
                        <label>
                        <input type="mt-3 text" className="form-control"  placeholder="Event Name"
                            onChange={
                                e => setName(e.target.value)
                            }/>
                        </label>
                        <label>
                        <textarea rows = "5" cols = "60" type="text" className="mt-2 form-control"  placeholder="Event Description"
                            onChange={
                                e => setDescription(e.target.value)
                            }>
                        </textarea>
                        </label>
                        <div className="row mt-3">
                            <div className="column col-md d-flex flex-column justify-content-center align-items-center ">
                            <h6> Select Start Date </h6>
                            <DatePicker 
                                selected ={startDate} 
                                onChange={(date) =>{setStartDate(date);}
                            }/>
                            </div>
                            <div className="column col-md d-flex flex-column justify-content-center align-items-center">
                            <h6> Select End Date </h6>
                            <DatePicker 
                                selected ={endDate} 
                                onChange={(date) =>{setEndDate(date);}
                            }/>
                            </div>
                        </div>
                        <button className="mt-3 btn btn-primary btn-block" type="submit">Create Event</button>
                    </form>
                </div>
            </div>            
        </div>
       
    )
}

export default CreateEvent
