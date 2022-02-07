import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddCategory() {
    //useState
    const [categoryname, setCategoryname] = useState(String);
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
        .post(`${process.env.REACT_APP_API}/addcategory`, categorydata)
        .then(response => {
            Swal.fire('Nice!','Add Category Success!!','success');
            setCategoryname("");
        })
        .catch(error => {
            Swal.fire('Something went wrong!',error.response.data.err,'error');
        })
        
    }

    return (
        <div className="container ms-3 ps-3 mb-5">
            <h1><strong>Add New Category</strong></h1>
            <form onSubmit={saveCategory}>
                <div className="form-group">
                    <div className="mb-3  mt-5">
                        <label className="form-label">Category Name</label>
                        <div className="col-4">
                        <input type="text" className="form-control"
                        value={categoryname}
                        onChange={categorynameHandleChange}
                        ></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </div>
            </form>
        </div>
    )
}
