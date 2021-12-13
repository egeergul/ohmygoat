import React from 'react'
import "./Club.css"

const Club = () => {
    return (
        <div>
            <div className="club-container">
                <div className="club-header">
                   <p>Chess Club</p>
                </div>
                <div className="club-body">
                    <img src="https://www.ecpps.k12.nc.us/uploaded/Elizabeth_City_Pasquotank_Early_College/clubs/chess-club.jpg"/>
                    <div className="club-body-right">

                        <p>Chess Club | 2 Upcoming Events | 15 Total Events
This club consists of the chess lovers and, here we organize chess tournements and activities throughout the semester in the campus.

                        </p>
                        <button className="btn btn-primary btn-block">Exit</button>
                        
                        <button className="btn btn-primary btn-block">Visit Club</button>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Club