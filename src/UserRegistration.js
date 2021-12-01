import React from "react";
import {useState} from "react";
import {FormGroup} from "@mui/material";
import {Grid, TextField, Button} from "@mui/material";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _fetch from "isomorphic-fetch";


const UserRegistration = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // checking if passwords match
        if (password !== passwordConfirm) {
            console.log('hdfsjhjs');
            toast.error('Passwords do not match');
            return;
        }
        console.log(username);
        console.log(password);
        console.log(email);

        fetch("http://localhost:8080/auth/signupStudent", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {name: username, password, email}
            )
        }).then((r) => {
            console.log('fdfs');
            console.log(r);
            if (r.ok) {
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500) {
                console.log('smamds');
                return Promise.reject(new Error("hata oluştu"));
            }
            return Promise.reject(new Error("bilinmeyen hata"));
        }).then((r) => r.json()).then((response) => {
            toast.success(`User with id ${
                response.id
            } added, you are being directed to login page`);
        }).catch((e) => {
            console.log("here");
            toast.error(e.message);
        });

    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.log(username);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(password);
    };

    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
        console.log(passwordConfirm);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField id="username" name="username" label="Username" type="text"
                            value={username}
                            onChange={handleUsernameChange}/>
                    </Grid>
                    <Grid item>
                        <TextField id="email" name="email" label="Email" type="text"
                            value={email}
                            onChange={handleEmailChange}/>
                    </Grid>
                    <Grid item>
                        <TextField id="password" name="password" label="Password" type="text"
                            value={password}
                            onChange={handlePasswordChange}/>
                    </Grid>
                    <Grid item>
                        <TextField id="passwordConf" name="passwordConf" label="Password Confirmation" type="text"
                            value={passwordConfirm}
                            onChange={handlePasswordConfirmChange}/>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        <ToastContainer/>
                        Submit
                    </Button>
                </Grid>
            </form>
        </div>
    );
};

export default UserRegistration;
