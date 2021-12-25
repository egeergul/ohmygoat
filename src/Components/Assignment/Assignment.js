import React from 'react'
import "./Assignment.css"

const Assignment = (props) => {
    const eventDate = props.date
    const year = eventDate.substring(0, eventDate.indexOf("-"))
    const month = eventDate.substring(eventDate.indexOf("-")+1, eventDate.length-3)
    const day = eventDate.substring(eventDate.length-2)
    const eventDateFormatted = day + "/" + month + "/" + year
    return (
        <div>
            <div>
                <div className="assignment">
                    <div className="assignment-header mb-3">
                        <div className='d-flex flex-row'>
                            <div className="d-flex flex-column assignment_club_info">
                                <img className=" assignment_pp"
                                    src={
                                        props.pp
                                    }/>
                                <p>{
                                    props.club
                                }</p>
                            </div>
                            <p>{
                                props.name
                            }</p>
                        </div>
                        <p>due to {
                            eventDateFormatted
                        }</p>
                    </div>
                    <div className="assignment-body">
                        <p>{
                            props.description
                        }</p>

                       <div className='d-flex flex-column'>
                       {
                            props.isClub && localStorage.roleOfStudent.toString() == "PRESIDENT"?
                            <button className="my-3 btn btn-primary btn-block">Mark as Done!</button>:
                            <></>
                        }

                        {
                            props.isClub?
                            <button className="btn btn-primary btn-block">View Assignment</button> 
                            :
                            <button className="btn btn-primary btn-block">Do It!</button>
                        }

                       </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment
