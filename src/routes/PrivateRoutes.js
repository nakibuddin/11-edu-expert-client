import { fromJSON } from 'postcss';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../context/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    // console.log('From private route page: ', location);

    if(loading){
        return <p>loading.....</p>
    }

    if(user && user.uid){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default PrivateRoutes;