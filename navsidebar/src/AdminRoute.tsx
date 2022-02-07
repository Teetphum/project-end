import React from 'react';

import { getUser, getIsAdmin } from "./services/authorization";

import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({component:Component,...rest }:any) => (
    <Route 
        {...rest}
        render={props=>
            getUser() ? (
                getIsAdmin() ? (
                    <Component {...props}/>
                ) : (
                    <Redirect 
                        to={{pathname:"/", state:{from:props.location}}}
                    />
                )
            ) : (
                <Redirect 
                    to={{pathname:"/signin", state:{from:props.location}}}
                />
            )
        }
    />
);

export default AdminRoute;
