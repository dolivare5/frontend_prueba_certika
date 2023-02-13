import React, {  } from 'react';
import {Navigate, Outlet} from 'react-router-dom';


const PrivateRoute = ({ children, token, redirectTo='/login' }) => {
    if (!token) {
        return <Navigate  to={redirectTo}/>
    }
  return children ? children : <Outlet />
};

export default PrivateRoute;
