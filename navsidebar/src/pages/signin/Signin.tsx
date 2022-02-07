import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

import { authen, getUser } from '../../services/authorization';

function Signin() {
    const history = useHistory();

    const [username, setUsername] = useState(String);
    const [password, setPassword] = useState(String);

    const userdata = {
        username: username,
        password: password
    }

    const usernameHandleChange = (event:any) => {
        setUsername(event.target.value);
    }

    const passwordHandleChange = (event:any) => {
        setPassword(event.target.value);
    }

    const sendData = (event:any) => {
        event.preventDefault();
        console.log(userdata);
        axios
        .post(`${process.env.REACT_APP_API}/signin`, userdata)
        .then(response => {
            console.log(response);
            authen(response,()=>history.push("/showProducts"))
            window.location.reload();
        }).catch(err => {
            Swal.fire('Sorry!!',err.response.data.error,'error');
        })
    }

    useEffect(()=>{
        getUser() && history.push("/showProducts")

        
        // eslint-disable-next-line
    },[])


    return (
        <div>
            <div className="container ms-3 ps-3 mb-5">
            <h1><strong>Sign in</strong></h1>
            <form onSubmit={sendData}>
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
                        <label className="form-label">Password</label>
                        <div className="col-4">
                        <input type="password" className="form-control" 
                            value={password}
                            onChange={passwordHandleChange}
                        >
                        </input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Signin;
