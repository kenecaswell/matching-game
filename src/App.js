import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { MainMenu } from './pages/MainMenu'
import { Game } from './pages/Game'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainMenu} />
        <Route exact path='/game' component={Game} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
