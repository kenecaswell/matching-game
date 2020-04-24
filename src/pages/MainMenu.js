import React from 'react'
import Button from 'react-bootstrap/Button'

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
      <section>
        <p>A fun game of matching tiles!</p>
        <Button href="/game" variant="primary" size="lg">
          Start Game!
        </Button>
      </section>
    </header>
  </div>
)

export { MainMenu }
