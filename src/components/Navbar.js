import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleShowNavbar)
    return () => window.removeEventListener('scroll', handleShowNavbar)
  }, [])
  return (
    <div className={`nav ${showNavbar && 'nav__black'}`}>
      <div className="nav__contents">
        <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <img className='nav__avatar' src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" />
      </div>
    </div>
  )
}
