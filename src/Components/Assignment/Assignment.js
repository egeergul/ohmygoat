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
                        <button className="btn btn-primary btn-block">Do It!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment
