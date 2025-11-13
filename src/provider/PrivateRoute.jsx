import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user } = use(AuthContext)
    if (user) {
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate >
};

export default PrivateRoute;