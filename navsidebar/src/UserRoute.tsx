import { getUser } from "./services/authorization";

import { Route, Redirect } from 'react-router-dom';

import React from 'react';

const UserRoute = ({component:Component,...rest }:any) => (
    <Route 
        {...rest}
        render={props=>
            getUser() ? (
                <Component {...props}/>
            ) : (
                <Redirect 
                    to={{pathname:"/signin", state:{from:props.location}}}
                />
            )
        }
    />
);

export default UserRoute;
