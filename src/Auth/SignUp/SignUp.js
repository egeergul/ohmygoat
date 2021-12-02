import React from 'react'
import "./SignUp.css"
import Logo from "../../Assets/bilkent_logo.png"
import { BrowserRouter as Link} from "react-router-dom";
import {useHistory} from  "react-router-dom";

const SignUp = () => {
    let history =   useHistory()
    return (
        <div>
            <div className="signup_body">
                <div className="card text-center">
                    <div className="intro">
                        <img src={Logo}
                            width="160"/>
                    </div>
                    <div className="mt-4 text-center">
                        <h4>New to ohmygoat.com?</h4>
                        <h6>Register now</h6>
                        <div className="mt-3 inputbox">
                            <input type="text" className="form-control" name="" placeholder="Email"/>
                        </div>
                        <div className="inputbox">
                            <input type="password" className="form-control" name="" placeholder="Password"/>
                        </div>
                        <div className="inputbox">
                            <input type="password" className="form-control" name="" placeholder="Password again"/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button onClick={()=>{history.push("/home")}}
                        className="btn btn-primary btn-block">Register</button>
                    </div>
                    <div className="text-center intro">
                        <span className="d-block account">Already have account yet?</span>
                        <p onClick={()=>{history.push("/login")}}>
                                Click here to login
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
