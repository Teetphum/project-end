import React from 'react'

import { Link } from 'react-router-dom';

import { getUser, getIsAdmin } from '../services/authorization';

export default function Sidebar() {

    const admin = getIsAdmin();

    console.log(admin);

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 mt-5 text-white bg-dark position-fixed overflow-auto" style={{width: '250px',height: '100vh'}}>
        
        <ul className="nav nav-pills flex-column mb-auto">
            {!getUser() && (
                <div>
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white mt-2" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/showProducts" className="nav-link text-white mt-2">Products</Link>
                </li>
                <li>
                    <Link to="/showCategories" className="nav-link text-white mt-2">Categories</Link>
                </li>
                <li>
                   <Link to="/howtoshipping" className="nav-link text-white mt-2">How to Shipping</Link>
               </li>
               <li>
                     <Link to="/aboutus" className="nav-link text-white mt-2">About us</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link text-white mt-2">Contact</Link>
                </li>
                </div>
            )}
            {/* {getUser() && (
                <div>
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white mt-2" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/showProducts" className="nav-link text-white mt-2">Products</Link>
                </li>
                <li>
                    <Link to="/showCategories" className="nav-link text-white mt-2">Categories</Link>
                </li>
                <li>
                    <Link to="/howtoshipping" className="nav-link text-white mt-2">How to Shipping</Link>
                </li>
                <li>
                    <Link to="/aboutus" className="nav-link text-white mt-2">About us</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link text-white mt-2">Contact</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/user/profile" className="nav-link text-white mt-2">Profile</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link text-white mt-2">Cart</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link text-white mt-2">Orders</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link text-white mt-2">Support</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/addProduct" className="nav-link text-white mt-2">Add Product</Link>
                </li>
                <li>
                    <Link to="/addCategory" className="nav-link text-white mt-2">Add Category</Link>
                </li>
                <li>
                    <Link to="/manageproduct" className="nav-link text-white mt-2">Manage Products</Link>
                </li>
                <li>
                    <Link to="/managecategory" className="nav-link text-white mt-2">Manage Categories</Link>
                </li>
                <li>
                    <Link to="/manageuser" className="nav-link text-white mt-2">Manage Users</Link>
                </li>
                </div>
            )} */}
            {getUser() && (
                admin ? (
                    <div>
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white mt-2" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/showProducts" className="nav-link text-white mt-2">Products</Link>
                </li>
                <li>
                    <Link to="/showCategories" className="nav-link text-white mt-2">Categories</Link>
                </li>
                <li>
                    <Link to="/howtoshipping" className="nav-link text-white mt-2">How to Shipping</Link>
                </li>
                <li>
                    <Link to="/aboutus" className="nav-link text-white mt-2">About us</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link text-white mt-2">Contact</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/addProduct" className="nav-link text-white mt-2">Add Product</Link>
                </li>
                <li>
                    <Link to="/addCategory" className="nav-link text-white mt-2">Add Category</Link>
                </li>
                <li>
                    <Link to="/manageproduct" className="nav-link text-white mt-2">Manage Products</Link>
                </li>
                <li>
                    <Link to="/managecategory" className="nav-link text-white mt-2">Manage Categories</Link>
                </li>
                <li>
                    <Link to="/manageuser" className="nav-link text-white mt-2">Manage Users</Link>
                </li>
                </div>
                ) : (
                    <div>
                        <li className="nav-item">
                    <Link to="/" className="nav-link text-white mt-2" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/showProducts" className="nav-link text-white mt-2">Products</Link>
                </li>
                <li>
                    <Link to="/showCategories" className="nav-link text-white mt-2">Categories</Link>
                </li>
                <li>
                    <Link to="/howtoshipping" className="nav-link text-white mt-2">How to Shipping</Link>
                </li>
                <li>
                    <Link to="/aboutus" className="nav-link text-white mt-2">About us</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link text-white mt-2">Contact</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/user/profile" className="nav-link text-white mt-2">Profile</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link text-white mt-2">Cart</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link text-white mt-2">Orders</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link text-white mt-2">Support</Link>
                </li>
                    </div>
                )
            )}
            
        </ul>
        </div>
    )
}
