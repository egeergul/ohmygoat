import React from 'react';
import {useState} from 'react';
import UploadFilesService from './UploadFilesService';
const UploadFiles = (props) =>{
    const[selectedFiles, setSelectedFiles] = useState();
    const[currentFile, setCurrentFiles] = useState();
    const[progress, setProgress] = useState(0);
    const[message, setMessage] = useState('');
    const[fileInfos, setFileInfos] = useState([]);

    const selectFile = (event) =>{
        setSelectedFiles(event.target.files);
    };

    const uploadFiles = () => {
        let currentFile = this.state.selectedFiles[0];
        
        setProgress(0);
        setCurrentFiles(currentFile);
    
        UploadFilesService.upload(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total))
        })
          .then((response) => {
              setMessage(response.data.message);
            return UploadFilesService.getFiles(localStorage.getItem('id'));
          })
          .then((files) => {
              setFileInfos(files.data);
          })
          .catch(() => {
              setProgress(0);
              setMessage("Could not upload the file!");
              setCurrentFiles();
          });
    
        setCurrentFiles(undefined);
      }
      return(
        <div>
          {currentFile && (
            <div className="progress">
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progress + "%" }}
              >
                {progress}%
              </div>
            </div>
          )}
  
          <label className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>
  
          <button className="btn btn-success"
            disabled={!selectedFiles}
            onClick={uploadFiles}
          >
            Upload
          </button>
  
          <div className="alert alert-light" role="alert">
            {message}
          </div>
  
          <div className="card">
            <div className="card-header">List of Files</div>
            <ul className="list-group list-group-flush">
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <li className="list-group-item" key={index}>
                    <a href={file.url}>{file.name}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      );
};
export default UploadFiles;