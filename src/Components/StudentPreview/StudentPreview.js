import React from 'react'
import "./StudentPreview.css"

const StudentPreview = (props) => {
    var studentPos;

    if(props.position == "MEMBER")
        studentPos = "Regular Member"
    else if(props.position == "ACTIVE_MEMBER")
        studentPos = "Active Member"
    else if(props.position == "BOARD_MEMBER")
        studentPos = "Director Board Member"
    else if(props.position == "PRESIDENT")
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
