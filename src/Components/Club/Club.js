import React from 'react'
import "./Club.css"

const Club = (props) => {
    return (
        <div>
            <div className="club-container">
                <div className="club-header">
                    <img className="pp"
                        src={
                            props.pp
                        }/>
                    <p>{
                        props.name
                    }</p>
                </div>
                <div className="club-body">
                    <p>Chess Club | {
                        props.upcoming_events
                    }
                        Events | {
                        props.total_events
                    }
                        Total Events</p>
                    <div className="container">
                        <div className="club-body-bottom row">
                            <div className="col-md-8 club-body-left">
                                <p> {
                                    props.description
                                } </p>
                            </div>

                            <div className="col-md-2 club-body-right">
                                <button className="btn btn-primary btn-block">Exit</button>
                                <button className="btn btn-primary btn-block">Visit Club</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Club
