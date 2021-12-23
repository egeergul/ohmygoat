import React, {useState} from 'react'
import "./CreateClub.css"

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
];let listItems = []

for (let i = 0; i < 10000; i++) {
listItems.push({id: i, content: i})}const CreateClub = (props) => {
const [clubName, setClubName] = useState("");


return (
    <div>
        <div className="create-club">
            <form className="text-center">
                <div className="d-flex flex-column">
                    {/*Step 1*/}
                    <div className="step d-flex flex-column">
                        <div className="d-flex flex-row">
                            <p className='circle'>1</p>
                            <p>Specify Club Name</p>
                        </div>
                        <label>
                            <input type="text" className="mt-2 form-control" placeholder="Club's Name"
                                onChange={
                                    e => setClubName(e.target.value)
                                }/>
                        </label>
                        <p>
                            <i>Default password will be oh_my_goat_new_club</i>
                        </p>
                    </div>

                    {/*Step 2*/}
                    <div className="step d-flex flex-column">
                        <div className="d-flex flex-row">
                            <p className='circle'>2</p>
                            <p><i>Assign an available advisor or create a new one</i></p>
                        </div>
                        here wşll be advisor lists
                        <h3 className='mt-1'>OR</h3>
                        <label>
                            <input type="text" className="mt-2 form-control" placeholder="New Advisor's Email"
                                onChange={
                                    e => setClubName(e.target.value)
                                }/>
                        </label>
                        <p>
                            <i>Default password will be oh_my_goat_new_advisor</i>
                        </p>

                    </div>                   
                </div>
                <button className="mt-3 btn btn-primary btn-block" type="submit">Create Club</button>
            </form>

        </div>
    </div>
)}
export default CreateClub
