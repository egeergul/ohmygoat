import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import TimePicker from 'react-time-picker';
import InputSpinner from 'react-bootstrap-input-spinner'
import "./ClCreateAssignment.css"

const ClCreateAssignment = () => {
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState(new Date())
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
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ClCreateAssignment
