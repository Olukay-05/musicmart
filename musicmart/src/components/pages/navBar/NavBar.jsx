import React from 'react'

const NavBar = () => {
  return (
    
    <div className="navBar">
        <div className="logo">
            <h1>musicmart.</h1>
        </div>
        <ul>
            <li className="active">Home</li>
            <li>Search</li>
            <li>Your Library</li>
        </ul>
        <div className="cookies">
            <span>Cookies</span>
            <span>Privacy Policy</span>
        </div>
    </div>
    
  )
}

export default NavBar