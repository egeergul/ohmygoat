import React from 'react'
import "./Profile.css"
import Logo from "../../Assets/bilkent_logo.png"
import { BrowserRouter as Link} from "react-router-dom";
import {StNav, Calendar, Event, Clubs} from "../../Components"
import {useHistory} from  "react-router-dom";
import Club from '../../Components/Clubs/Clubs';


const Profile = () => {

    let history =   useHistory()
    return (
        <div className="st-body-grid">
            <div className="st-body-flex">
                <StNav/>
                <div className="st-home-container">
                    <div className="st-home-container-clubs2"> 
                        <Clubs/>
                        <Clubs/>
                        <Clubs/>
                        <Clubs/>
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
