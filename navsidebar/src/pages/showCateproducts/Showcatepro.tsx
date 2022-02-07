import React from 'react';
import './Showcatepro.css'

import { useState, useEffect } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

function Showcatepro(props:any) {

    //product state
    const [products, setProducts] = useState([])

    // fetch Data
    const fetchData = () => {
        axios
        .get(`${process.env.REACT_APP_API}/getallproducts/category/${props.match.params._id}`)
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
        // eslint-disable-next-line
    },[])

    console.log(`do it => ${products}`);
    


    return (
        <div>
        <h1><strong>Search by Category</strong></h1>
        <div className="album py-5 bg-light">
            <div className="container">

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {products.map((item:any, index)=>(
        
        <div className="col" key={index}>
        <div className="card shadow-sm" >
          <Link to={`/singleproduct/${item._id}`}> 
          <img src={`/images/${item.img}`} className="card-img-top" alt="..."/>
          </Link>        
          <div className="card-body">
              <a href={`/singleproduct/${item._id}`} className="text-decoration-none link-dark">
              <h3><strong>{item.bookname}</strong></h3>
              </a>
              <p><strong>Price: </strong>{item.price}</p>
              
            <div className="d-flex justify-content-between align-items-center">
              <Link type="button" className="btn btn-sm btn-outline-secondary"  to={`/singleproduct/${item._id}`}>
                View
              </Link>
              <button type="button" className="btn btn-sm btn btn-dark">Add to Cart</button>  
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
</div>
      
    )
}

export default Showcatepro;
