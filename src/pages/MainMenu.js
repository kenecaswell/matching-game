import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import './main.css'

const MainMenu = () => (
  <div className='main'>
    <header className='main-header'>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={logo} className='app-logo' alt='logo' />
          </div>
          <div className='flip-card-back'>
            <h1>Matching Game</h1>
          </div>
        </div>
      </div>
      <p>
        This is a fun game of matching tiles!
      </p>
      <Link to='/game' className='button'>
        Start Game!
      </Link>
    </header>
  </div>
)

export { MainMenu }
