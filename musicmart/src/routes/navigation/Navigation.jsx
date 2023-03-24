import React from 'react'

import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import "../navigation/Navigation.scss";

const Navigation = () => {

  return (
    <Fragment>

      <div className="navigation">

        <Link className="logo-container" to="/">
          <div>Home</div>
        </Link>

       
        
        <div className="links-container">
        <Link className="nav-link" to="/Login">
            <div>Login</div>
        </Link>

          <Link className="nav-link" to="/SignUp">
            Sign Up
          </Link>

          

          <Link className="nav-link" to="/PaymentForm">
              Subscription
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;