import React from 'react'

import NavBar from '../navBar/NavBar'
import Main from '../main/Main'
import Navigation from '../../../routes/navigation/Navigation'

import "../home/Home.scss"

const Home = () => {
  return (
    <div className="outerWrap">
        <div className="app">
          <NavBar />
          <Main />
        </div>
        <div className="musicControls">music controls</div>
    </div>
  )
}

export default Home