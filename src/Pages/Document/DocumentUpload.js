import React, { useState } from "react";

const DocumentUpload = (props) =>{
    const[file, setFile] = useState(null);

    const handleFile = (event) =>{
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        let formData = new FormData();
        formData.append('file', file);
        console.log(formData);

        fetch("http://localhost:8080/upload", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${
                    localStorage.token
                }`,
            },
            body: formData,
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
            console.log(r);
            console.log('uploaded');
            
        }).catch((e) => {
            console.log(e.message);
        });
    };

    return <div>
        <form className="d-flex flex-column"
            onSubmit= {handleSubmit} enctype = "multipart/form-data">
        <input type='file' name='file_area' onChange={handleFile} multiple/>
        <button className="mt-3 btn btn-primary btn-block" type='submit' >upload </button>
        </form>
    </div>
};
export default DocumentUpload;