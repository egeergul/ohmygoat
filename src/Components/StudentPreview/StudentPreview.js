import React from 'react'
import "./StudentPreview.css"

const StudentPreview = (props) => {
    var stutentPos;
    if(StudentPreview.position == 1)
        stutentPos = "Regular Member"
    else if(StudentPreview.position == 2)
        stutentPos = "Active Member"
    else if(StudentPreview.position == 3)
        stutentPos = "Director Board Member"
    else if(StudentPreview.position == 4)
        stutentPos = "The President"
    else    
        stutentPos = "Something went wrong!"
    return (
        <div className="st-prev-container">
            <p>{props.name} - {props.id} - {props.department} - {props.position}</p>
            <button className="btn btn-primary btn-block">Edit Role</button>
        </div>
    )
}

export default StudentPreview
