import React, {useState, useEffect} from 'react'
import "./Login.css"
import PropTypes from 'prop-types';
import Logo from "../../Assets/bilkent_logo.png"
import {BrowserRouter as Link} from "react-router-dom";
import {useHistory} from "react-router-dom";



const Login = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    let history = useHistory();


    const handleSubmit = (event) =>{
      event.preventDefault();

      fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({  username,password }),
  })
    .then((r) => {
        console.log(r);
      if (r.ok) {
        return r;
      }
      if (r.status === 401 || r.status === 403 || r.status === 500) {
        return Promise.reject(new Error("hata oluştu"));
      }
      return Promise.reject(new Error("bilinmeyen hata"));
    })
    .then((r) => r.json())
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.token);
      localStorage.setItem('email', response.email);
      localStorage.setItem("role", response.roles[0]);
      history.replace('/home');
    })
    .catch((e) => {
      console.log("here");
    });

  };

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text"
                        onChange={
                            e => setUserName(e.target.value)
                        }/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"
                        onChange={
                            e => setPassword(e.target.value)
                        }/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
} 

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login