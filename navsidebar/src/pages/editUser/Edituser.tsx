import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Edituser = (props:any) => {
    //useState
    const [username, setUsername] = useState(String);
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const [phonenumber, setPhonenumber] = useState(String);
    const [isadmin] = useState(false);
    const [userid, setUserid] = useState<any>();
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

    //use effect
   useEffect(() => {
    // fetch User Data
    const fetchData = () => {
        axios.get(`${process.env.REACT_APP_API}/getoneuser/${props.match.params._id}`)
        .then(response => {
            console.log(response.data);
            const username = response.data.username;
            setUsername(username);
            const email = response.data.email;
            setEmail(email);
            const password = response.data.password;
            setPassword(password);
            const tel = response.data.tel;
            setPhonenumber(tel);
            const userid = response.data._id;
            setUserid(userid);
        })
        .catch(error => {
            alert(error)
        })
    }
    fetchData();
    // eslint-disable-next-line
},[])

    const saveData = (event:any) => {
        event.preventDefault();
        console.log(userdata);
        console.log("api is => ", process.env.REACT_APP_API);
        axios
        .put(`${process.env.REACT_APP_API}/updateuser/${userid}`, userdata)
        .then(response => {
            Swal.fire({
                title: "Updated",
                text: "update user data success!!",
                icon: "success"
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.reload();
                }
            })
        })
        .catch(error => {
            Swal.fire('Something went wrong!',error.response.data.err,'error');
        })
        
    }

    //----------------------------------------------------------------

    
    return (
        <div className="container ms-3 ps-3 mb-5">
            {JSON.stringify(userdata)}
            <h1><strong>Edit User Data</strong></h1>
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
                        <input type="text" className="form-control" 
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
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default Edituser
