import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Outlet/>
        <footer>
            05.01.2024
        </footer>
    </div>
  )
}

export default Layout