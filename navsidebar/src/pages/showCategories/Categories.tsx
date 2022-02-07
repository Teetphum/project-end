import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';


function Categories() {
    //get method
    const [categories, setCategories] = useState([]);

    // fetch Data
    const fetchData = () => {
        axios
        .get(`${process.env.REACT_APP_API}/getcategory`)
        .then(response => {
            setCategories(response.data)
        })
        .catch(error => {
            alert(error)
        })
    }
    //use effect
    useEffect(() => {
        fetchData()
    },[])


    return (
        <div className="container ms-3 ps-3 mb-5">
            <h1><strong>All Category</strong></h1>
            {categories.map((item:any, index) => (
                <div className="row mb-3 me-0" key={index}>
                <div className="col-12">
                <Link type="button" className="btn btn-info" to={`/showProducts/category/${item._id}`}>
                    {item.categoryname}
                </Link>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Categories
