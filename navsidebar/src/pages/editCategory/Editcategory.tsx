import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Editcategory = (props:any) => {
    //useState
    const [categoryname, setCategoryname] = useState(String);
    const [categoryid, setCategoryid] = useState<any>();
    //Data Props
    const categorydata = {
        categoryname: categoryname,
    }
    //event Handle
    const categorynameHandleChange = (event:any) => {
        setCategoryname(event.target.value);
    }
    //send Data via REST Api
    const saveCategory = (event:any) => {
        event.preventDefault();
        console.log(categorydata);
        console.log("api is => ", process.env.REACT_APP_API);
        axios
        .put(`${process.env.REACT_APP_API}/updatecategory/${categoryid}`, categorydata)
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

    //use effect
    useEffect(() => {
    // fetch User Data
        const fetchData = () => {
            axios.get(`${process.env.REACT_APP_API}/getonecategory/${props.match.params._id}`)
            .then(response => {
                console.log(response.data);
                const categoryname = response.data.categoryname;
                setCategoryname(categoryname);
                const cateid = response.data._id;
                setCategoryid(cateid);
            })
            .catch(error => {
                alert(error)
            })
        }
        fetchData();
        // eslint-disable-next-line
    },[])

    //--------------------------------------------------------------------------------------

    return (
        <div>
            <div className="container ms-3 ps-3 mb-5">
            <h1><strong>Edit Category Name</strong></h1>
            <form onSubmit={saveCategory}>
                <div className="form-group">
                    <div className="mb-3  mt-5">
                        <label className="form-label">New Category Name</label>
                        <div className="col-4">
                        <input type="text" className="form-control"
                        value={categoryname}
                        onChange={categorynameHandleChange}
                        ></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Editcategory
