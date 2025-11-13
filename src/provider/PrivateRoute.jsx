import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Pages/Loader';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = use(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate >
};

export default PrivateRoute;