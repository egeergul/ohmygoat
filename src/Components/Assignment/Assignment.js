import React from 'react'
import "./Assignment.css"

const Assignment = (props) => {

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
                            props.date
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
