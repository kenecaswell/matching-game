import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

const MainMenu = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
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
