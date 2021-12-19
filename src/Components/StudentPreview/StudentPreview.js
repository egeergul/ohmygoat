import React from 'react'
import "./StudentPreview.css"

const StudentPreview = (props) => {
    var studentPos;

    if(props.position == 1)
        studentPos = "Regular Member"
    else if(props.position == 2)
        studentPos = "Active Member"
    else if(props.position == 3)
        studentPos = "Director Board Member"
    else if(props.position == 4)
        studentPos = "The President"
    else    
        studentPos = "Something went wrong!"
    return (
        <div className="st-prev-container">
            <p>{props.name} - {props.id} - {props.department} - {studentPos}</p>
            <button className="btn btn-primary btn-block">Edit Role</button>
        </div>
    )
}

export default StudentPreview
