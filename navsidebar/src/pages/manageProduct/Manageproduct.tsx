import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import {Link} from 'react-router-dom';

function Manageproduct() {
    //get product
    const [products, setProducts] = useState([])

    // fetch Data
    const fetchData = () => {
        axios
        .get(`${process.env.REACT_APP_API}/getallproducts`)
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => {
            alert(error)
        })
    }
    //use effect
    useEffect(() => {
        fetchData()
    },[])

    const confirmDelete = (id:any) => {
        Swal.fire({
            title: "Are You Sure!?",
            text: "you want to Delete this Category?",
            icon: "warning",
            showCancelButton: true
        }).then((result) => {
            if(result.isConfirmed){
                deleteProduct(id);
            }
        })
    }

    const deleteProduct = (id:any) => {
        //send http request
        axios
        .delete(`${process.env.REACT_APP_API}/product/${id}`)
        .then(response => {
            Swal.fire({
                title: "Deleted!!",
                text: response.data.message,
                icon: "success" 
            })
            fetchData()
        })
        .catch(err => {
            console.log(err);
            
        })
    }


    return (
        <div>
            <h1><strong>Manage Products</strong></h1>
            <hr />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Publish Year</th>
                        <th scope="col">Price</th>
                        <th scope="col">Tel</th>
                        <th scope="col">Creat at(yyyy-mm-dd, hr:mn:sec)</th>
                        <th scope="col">Manage</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item:any, index)=>(
                        <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.bookname}</td>
                        <td>{item.publisher}</td>
                        <td>{item.publishyear}</td>
                        <td>{item.price}</td>
                        <td>{item.tel}</td>
                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                        <td><Link type="button" className="btn btn-info" to={`/product/edit/${item._id}`}>Edit</Link></td>
                        <td><button type="button" className="btn btn-danger" onClick={() => confirmDelete(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Manageproduct
