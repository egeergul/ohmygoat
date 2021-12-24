import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const EditProfile = (props) =>{
    const[newName, setNewName] = useState(localStorage.name);
    const[newGe250, setGe250] = useState(localStorage.ge250_251);

    const history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();

        fetch("http://localhost:8080/auth/updateStudentProfile" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${
                    localStorage.token
                }`,
            },
            body: JSON.stringify(
                {id: localStorage.id,
                name: newName,
                ge250: newGe250   }
            ),
            
            credentials: "include"
        }, ).then((r) => {
            if (r.ok) {
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                return Promise.reject(new Error("Bir hata oluştu " + r.status));
            }
            return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
        }).then((r) => r.json()).then((r) => {
            history.push("/myProfile");
        }).catch((e) => {
            console.log(e.message);
        });
    };

    return <div className='create-club-container'>
    <div className="crate-event">
        <div className="create-event-header">
            <h3>Profile Page Edit</h3>
        </div>
        <div className="create-event-body ">
            <form className="d-flex flex-column"
            onSubmit= {handleSubmit} >
                <label forName='studentName' >Your Name</label>
                    <input type="mt-3 text" name='studentName' value={localStorage.name} className="form-control"
                        onChange={
                            e => setNewName(e.target.value)
                        }/>
                <label forName='ge250'>Ge250 </label>
                    <input rows="5" cols="60" type="number" name='ge250' className="mt-2 form-control"
                        onChange={
                            e => setGe250(e.target.value)
                    }></input>
                
                <button className="mt-3 btn btn-primary btn-block" type='submit' >Update Profile</button>
            </form>
        </div>
    </div>
</div>
}

export default EditProfile;