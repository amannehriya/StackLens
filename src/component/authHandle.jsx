import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

function authHandle() {
    const navigate = useNavigate();
    const{SetIsAuthenticated} = useContext(AuthContext);
  
    
  
    SetIsAuthenticated(true);
    navigate('/')
  
  return (
    <div>authHandle</div>
  )
}

export default authHandle