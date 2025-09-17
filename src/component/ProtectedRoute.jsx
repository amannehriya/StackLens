import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';
import Loading from './utils/Loading';

function ProtectedRoute() {
  
    const {myData,isAuthenticated,loading} = useContext(AuthContext);;

    // console.log("myData,isAuthenticated,",myData,isAuthenticated)
    if(loading){
      // console.log("loading",loading)
     return( <Loading/>)
    }

  return isAuthenticated ? <Outlet/> : <Navigate to="/user/login" />
}

export default ProtectedRoute