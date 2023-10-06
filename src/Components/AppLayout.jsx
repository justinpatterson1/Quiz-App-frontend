import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className='h-screen'>

        <Outlet/>
    </div>
  )
}

export default AppLayout