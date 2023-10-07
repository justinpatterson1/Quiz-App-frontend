import React,{useContext, useState} from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import TriviaContext from '../Context/TriviaContext'

function AppLayout() {

  const {login} = useContext(TriviaContext)
  
  return (
    
    <div className='h-screen'>

        {login.status ? <Outlet/> : <Navigate to="/login"/>}

    </div>
  )
}

export default AppLayout