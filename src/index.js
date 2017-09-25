import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import Home from './containers/Home'
import { Provider } from 'react-redux'
import createStore from './configureStore'
import AppRouter from './routers/AppRouter'

const myStore = createStore({})

ReactDOM.render(
  <Provider store={myStore}>
    <AppRouter>
      <Home />
    </AppRouter>
  </Provider>,
  document.getElementById('root')
)
