import React from 'react'
import "./Assignment.css"

const Assignment = () => {
    return (
        <div>
            <div className="evenassignment-container">
                <div className="assignment-header">
                   <p>ACM</p>
                   <p>OR</p>
                   <p>IEEE</p>
                </div>
                <div className="assignment-body">
                    <div className="assignment-body-right">

                        <p> check your new Assignments
                            Assignment details...
                        </p>
                        <button className="btn btn-primary btn-block">Go To Assignment</button>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Assignment
