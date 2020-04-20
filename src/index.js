import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import { rootReducer } from './reducers'

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
