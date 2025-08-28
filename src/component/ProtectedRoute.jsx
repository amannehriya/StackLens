import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

function ProtectedRoute() {
  
    const {myData,isAuthenticated,loading} = useContext(AuthContext);;

    console.log("myData,isAuthenticated,",myData,isAuthenticated)

  return isAuthenticated ? <Outlet/> : <Navigate to="/user/login" />
}

export default ProtectedRoute