import React from 'react'
import {StNav, Calendar, Event} from "../../../Components"
import "./StHome.css"

const StHome = () => {
    return (

        <div className="st-body-grid">
            <div className="st-body-flex">
                <StNav/>
                <div className="st-home-container">
                    <div className="st-home-container-calendar">
                        <Calendar/>
                    </div>
                    <div className="st-home-container-events">
                        <Event />
                        <Event/>
                        <Event/>
                    </div>
                        
                        
                 
                </div>
            </div>
        </div>

    )
}

export default StHome
