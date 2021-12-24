import React, {useState} from 'react'
import "./CreateClub.css"


for (let i = 0; i < 10000; i++) {
listItems.push({id: i, content: i})}const CreateClub = (props) => {
const [clubName, setClubName] = useState("");
const [email, setEmail] = useState("");
const [advName, setAdvName] = useState("");

const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:8080/auth/createAdvisor", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( 
            {name: advName, email, password: "123456", clubId : null }
        )
    }).then((r) => {
        console.log(r);
        if (r.ok) {
            return r;
        }
        if (r.status === 401 || r.status === 403 || r.status === 500) {
            return Promise.reject(new Error("hata oluştu"));
        }
        return Promise.reject(new Error("bilinmeyen hata"));
    }).then((r) => r.json()).then((response) => {
        console.log(response);
        window.alert(response.message);
        const advisorId = response.message.substring(response.message.indexOf("!")+1).trim()
        return advisorId
        
    }).then((id) => {
        createClub(id)
    }).catch((e) => {
        console.log("here");
    })

}

const createClub = (passedid) =>{
    fetch("http://localhost:8080/club/addClub", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( 
            {name: clubName, description: "Description field is to be edited later on by the club!", clubAdvisorId: passedid, photo : "" }
        )
    }).then((r) => {
        console.log(r);
        if (r.ok) {
            
            return r;
        }
        if (r.status === 401 || r.status === 403 || r.status === 500) {
            return Promise.reject(new Error("hata oluştu"));
        }
        return Promise.reject(new Error("bilinmeyen hata"));
    }).then((r) => r.json()).then((response) => {
        console.log(response);
        window.alert(response.message)
    }).catch((e) => {
        console.log("here");
    })
}


return (
    <div>
        <div className="create-club">
            <form className="text-center" onSubmit={handleSubmit}>
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
                            <p><i>Create a new advisor</i></p>
                        </div>
                        <label>
                            <input type="text" className="mt-2 form-control" placeholder="New Advisor's Name"
                                onChange={
                                    e => setAdvName(e.target.value)
                                }/>
                        </label>
                        <h3 className='mt-1'>AND</h3>
                        <label>
                            <input type="text" className="mt-2 form-control" placeholder="New Advisor's Email"
                                onChange={
                                    e => setEmail(e.target.value)
                                }/>
                        </label>
                        <p>
                            <i>Default password will be oh_my_goat_new_advisor</i>
                        </p>

                    </div>   
                    <button className="my-3 btn btn-primary btn-block" type="submit">Create Club</button>                
                </div>

                
            </form>

        </div>
    </div>
)}
export default CreateClub
