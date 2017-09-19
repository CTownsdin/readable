import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import Root from './components/Root'
// import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './configureStore'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('root'))

// registerServiceWorker()
