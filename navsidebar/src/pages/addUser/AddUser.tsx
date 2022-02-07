import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddUser() {
    //useState
    const [username, setUsername] = useState(String);
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const [phonenumber, setPhonenumber] = useState(String);
    const [isadmin] = useState(false);
    //Data Props
    const userdata = {
        username: username,
        email: email,
        password: password,
        tel: phonenumber,
        isadmin: isadmin
    }
    //event Handle
    const usernameHandleChange = (event:any) => {
        setUsername(event.target.value);
    }
    const emailHandleChange = (event:any) => {
        setEmail(event.target.value);
    }
    const passwordHandleChange = (event:any) => {
        setPassword(event.target.value);
    }
    const phonenumberHandleChange = (event:any) => {
        setPhonenumber(event.target.value);
    }
    //send Data via REST Api
    const saveData = (event:any) => {
        event.preventDefault();
        console.log(userdata);
        console.log("api is => ", process.env.REACT_APP_API);
        axios
        .post(`${process.env.REACT_APP_API}/adduser`, userdata)
        .then(response => {
            Swal.fire('Welcome!','You Create Accout Success!!','success');
            setUsername("");
            setEmail("");
            setPassword("");
            setPhonenumber("");
        })
        .catch(error => {
            Swal.fire('Something went wrong!',error.response.data.err,'error');
        })
        
    }




    return (
        <div className="container ms-3 ps-3 mb-5">
            <h1><strong>Register</strong></h1>
            <form onSubmit={saveData}>
                <div className="form-group">
                <div className="row mb-3  mt-5">
                        <label className="form-label">User Name</label>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                            value={username}
                            onChange={usernameHandleChange}
                        >    
                        </input>
                    </div>
                    </div>
                    <div className="row mb-3">
                        <label className="form-label">Email address</label>
                        <div className="col-4">
                        <input type="email" className="form-control" 
                            value={email}
                            onChange={emailHandleChange}
                        >    
                        </input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="form-label">Password</label>
                        <div className="col-4">
                        <input type="password" className="form-control" 
                            value={password}
                            onChange={passwordHandleChange}
                        >
                        </input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="form-label">Phone Number</label>
                        <div className="col-4">
                        <input type="text" className="form-control" 
                            value={phonenumber}
                            onChange={phonenumberHandleChange}
                        >
                        </input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </div>
            </form>
        </div>
    )
}
