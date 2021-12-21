import React, {useState} from 'react'
import "./CreateClub.css"
import {AdminNavMid, ScrollableList, AdminClub} from "../../../Components"


const advisors = [
    {
        name: "eray.t",
        department: "CS"
    },
    {
        name: "ali.b",
        department: "CS"
    },
    {
        name: "noire.k",
        department: "CS"
    },
    {
        name: "vavava.z",
        department: "CS"
    }, {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    }, {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    }, {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    }, {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    }
];
let listItems = []
for (let i = 0; i < 10000; i++) {
    listItems.push({id: i, content: i})
}
const CreateClub = (props) => {
    return (
        <div>
            <div className="stm-body-grid">
                <AdminNavMid/>
                <div className="bbbx">
                    <div className="createclub-container">
                        <div className="createclub-header">
                            <p>
                                <b>
                                    Create Club
                                </b>
                            </p>
                        </div>

                        <div className="createclub-body">
                            <div className="dflex m-3 d-flex justify-content center">
                                <div className='circle'>1<></>
                                </div>
                                <p>Specify Club Name</p>

                                <div className='midcircle'>2<></>
                                </div>
                                <p>Assign An Available Advisor</p>
                                <div className='midcircle'>3<></>
                                </div>
                                <p>Click create club</p>
                            </div>
                            <div className="dflex m-3 d-flex justify-content center">
                                <div className="mt-3 clubbox center">
                                    <input type="searchclub" className="create-name" name="" placeholder="Write Club Name"/>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6005 body-right-club">
                                            {
                                            advisors.map((advisor) => (
                                                <div className="nameButton">
                                                    <input type="checkbox" id="advname" name="advname" value="Paneer"/>{
                                                    advisor.name
                                                } </div>
                                            ))
                                        } </div>
                                    </div>
                                </div>
                                <div className="centered">
                                    <b>OR</b>
                                </div>
                                <div className="mt-3 mailbox center">
                                    <input type="searchclub" className="create-name" name="" placeholder="advisor email"/>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block create-button">
                                Create Club
                            </button>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default CreateClub
