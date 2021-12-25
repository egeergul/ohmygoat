import React, {useEffect, useState} from 'react'
import "./ClubProfile.css"
import {Event, Forum} from "../"

const ClubProfile = (props) => {

 
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="column col-md d-flex flex-row justify-content-center align-items-center ">
                        <img className="club-pp d-flex r" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1024px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png" alt="club profile picture"/>

                    </div>
                    <div className="column col-md d-flex flex-row justify-content-center align-items-center">
                        <div className="club-bio d-flex flex-column ">
                            <div className="club-bio-header d-flex flex-row justify-content-around">
                                <h3>{props.name}</h3>
                                <p className='ms-3'>{props.numberOfMember} members</p>
                                <p className='ms-3'>{props.numberOfEvents} events</p>
                            </div>
                            <div className="club-bio-body d-flex flex-column ">
                                <p>socials</p>
                                <p>{props.description}</p>
                                <button>Edit Profile</button>
                                <button>See Assignments</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default ClubProfile
