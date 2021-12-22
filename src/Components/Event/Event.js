import React from 'react'
import "./Event.css"

const Event = (props) => {
    return (
        <div>
            <div className="event-container">
                <div className="event-header">
                    <p>{
                        props.club
                    }</p>
                    <p>{
                        props.name
                    }</p>
                    <p>{
                        props.mode
                    }</p>
                </div>
                <div className="event-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={
                                        props.img
                                    }
                                    className="event-img"/>
                            </div>
                            <div className="col-lg-8">
                                <div className="event-body-right">
                                    <p>{
                                        props.description
                                    }</p>
                                    <button className="btn btn-primary btn-block">View Event</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Event
