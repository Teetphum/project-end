import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { getUser, logout } from '../services/authorization';

export default function Header() {

    const history = useHistory();

    const username = getUser();

    const [keyword, setKeyword] = useState('');

    const searchHandleChange = (event:any) => {
        setKeyword(event.target.value);
    }

    console.log(keyword);

    const checkInput = (event:any) => {
        event.preventDefault();
        if(keyword === ''){
            console.log("keyword = empty");
            history.push("/showProducts");
        }
        else{
            console.log(`keyword = ${keyword}`);
            history.push(`/showProducts/search/${keyword}`);
            window.location.reload();
        }
    }

    console.log(username);

    const loglog = () => {
        logout(()=>history.push("/showProducts"));
        window.location.reload();
    }
    
    

    return (
        <header className="p-3 bg-dark text-white fixed-top">
        
        <div className="d-flex align-items-center justify-content-between ">
        <Link to="/" className="navbar-brand text-white text-decoration-none" style={{fontSize: '33px'}}>
            Book Store Online
        </Link>
            
            <form className="row mb-3 mb-lg-0 me-lg-3" onSubmit={checkInput}>
                <input type="search" className="col form-control form-control-dark" placeholder="Search..." aria-label="Search"
                value={keyword}
                onChange={searchHandleChange}
                >
                </input>
                <button className="col col-lg-2 btn btn-dark border-white"  type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </button>
            </form>
            
            {!getUser() && (
                <div className="text-end">
                <Link to="/addUser" className="btn btn-outline-light me-3" role="button">Sign-Up</Link>
                <Link to="/signin" className="btn btn-primary me-3" role="button">Login</Link>
                <button className="btn btn-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16" style={{}}>
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </button>
                </div>
            )}
            {getUser() && (
                <div className="text-end">
                <Link to="/user/profile" className="btn btn-outline-light me-3" role="button">{username}</Link>
                <button className="btn btn-danger me-3" 
                onClick={()=>loglog()}
                >Log out</button>
                <button className="btn btn-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16" style={{}}>
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </button>
                </div>
            )}

        </div>
        
        </header>
    )
}

