import React from 'react'
import "./Profile.css"
import {StNav, Calendar, Event, Club} from "../../../Components"
import {useHistory} from  "react-router-dom";



const Profile = () => {

    let history =   useHistory()
    return (
        <div className="st-body-grid">
            <div className="st-body-flex">
                <StNav/>
                <div className="st-home-container">
                    <div className="st-home-container-clubs2"> 
                        <Club/>
                        <Club/>
                        <Club/>
                        <Club/>
                    </div>
                    <div className="st-home-container-events2"> 
                        <Event/>
                        <Event/>
                    </div>
                        
                        
                 
                </div>
            </div>
        </div>
    )
}

export default Profile