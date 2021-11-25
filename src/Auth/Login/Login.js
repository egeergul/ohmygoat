import React from 'react'
import "./Login.css"
import Logo from "../../Assets/bilkent_logo.png"

const Login = () => {
    return (
        <div className="login_body">
            <div className="card text-center">
                <div className="intro"> 
                    <img src={Logo} width="160"/>
                </div>
                <div className="mt-4 text-center">
                    <h4>Welcome back to ohmygoat.com</h4> 
                    <div className="mt-3 inputbox"> 
                        <input type="text" className="form-control" name="" placeholder="Email"/> 
                    </div>
                    <div className="inputbox"> 
                        <input type="password" className="form-control" name="" placeholder="Password"/>
                    </div>
                </div>
                <div>
                    <a href="#" className="forgot">Forgot Password?</a> 
                </div>
                <div className="mt-2"> 
                    <button className="btn btn-primary btn-block">Log In</button> 
                </div>
                <div className="text-center intro"> 
                    <span className="d-block account">Don't have account yet?</span> 
                    <a href="#" className="to-sign-up">Click here to Sign Up</a> 
                </div>
            </div>
        </div>
    )
}

export default Login
