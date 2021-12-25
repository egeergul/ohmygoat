import React from 'react';
import httpCommon from './http-common';

const UploadFilesService = (props) => {
   const  upload = (file, onUploadProgress) => {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return httpCommon.post("uploadStudentProfilePic?id=" + localStorage.getItem('id'), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${
            localStorage.token
        }`,
        },
        onUploadProgress,
      });
    };
  
    const getFiles = (id) =>{
        return httpCommon.get('/profilePicture?id=' + id) ;
    }
};
/* 
const UploadFilesService = (props) =>{
    const uploadFile = (file, onUploadProgress) =>{
        let formData = new FormData();

        formData.append('file', file);
        return fetch("http://localhost:8080/uploadStudentProfilePic?id=" + localStorage.getItem('id'), {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
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
            history.push("/myProfile");
        }).catch((e) => {
            console.log(e.message);
        });
    };
}; */
export default UploadFilesService;