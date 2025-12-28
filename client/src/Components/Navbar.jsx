import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../store/auth'

const Navbar = () => {
  const { isLoggedIn } = useAuth()
  const [open, setOpen] = useState(false)

  const closeSidebar = () => setOpen(false)
  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <>
      <header className="topbar">
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">ServiceProvider</NavLink>
          </div>

          <nav className="top-nav" aria-label="Main navigation">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/service">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              {isLoggedIn ? (
                <li><NavLink to="/logout">Logout</NavLink></li>
              ) : (
                <>
                  <li><NavLink to="/register">Register</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </>
              )}
            </ul>
          </nav>

          {/* Hamburger button shows on small screens; you can keep it visible always if you prefer */}
          <button
            className="hamburger"
            aria-label={open ? "Close side menu" : "Open side menu"}
            aria-expanded={open}
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </header>

      {/* overlay */}
      <div
        className={`overlay ${open ? 'visible' : ''}`}
        onClick={closeSidebar}
        aria-hidden={!open}
      />

      {/* Side Navbar */}
      <aside className={`side-navbar ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="side-header">
          <div className="side-brand">
            <NavLink to="/" onClick={closeSidebar}>ServiceProvider</NavLink>
          </div>
          <button className="close-btn" onClick={closeSidebar} aria-label="Close side menu">✕</button>
        </div>

        <nav className="side-nav" aria-label="Side navigation">
          <ul>
            <li><NavLink to="/" onClick={closeSidebar}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeSidebar}>About</NavLink></li>
            <li><NavLink to="/service" onClick={closeSidebar}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={closeSidebar}>Contact</NavLink></li>
            {isLoggedIn ? (
              <li><NavLink to="/logout" onClick={closeSidebar}>Logout</NavLink></li>
            ) : (
              <>
                <li><NavLink to="/register" onClick={closeSidebar}>Register</NavLink></li>
                <li><NavLink to="/login" onClick={closeSidebar}>Login</NavLink></li>
              </>
            )}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Navbar
