import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const AdminLayouts = () => {
  return (<>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users">users</NavLink></li>
                    <li><NavLink to="/admin/contacts">contacts</NavLink></li>
                    <li><NavLink to="/service">services</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
  )
}

export default AdminLayouts