import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import Home from './containers/Home'
// import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import createStore from './configureStore'
import AppRouter from './routers/AppRouter'

const mockInitialState = {
  selectedCategory: '',
  entities: {
    users: {
      1: {
        id: 1,
        name: 'Andrew'
      },
      2: {
        id: 2,
        name: 'Bernice'
      }
    },
    posts: {
      1: {
        id: 1,
        title: 'Frontend Post Title',
        author: 1
      },
      2: {
        id: 2,
        title: 'Another Frontend Post',
        author: 1
      },
      3: {
        id: 1,
        title: 'ReactJS Post Title',
        author: 2
      },
      4: {
        id: 2,
        title: 'Another ReactJS Post',
        author: 2
      }
    }
  },
  postsByCategory: {
    frontend: {
      isFetching: false,
      hasErrored: false,
      didInvalidate: false,
      items: [1, 2]
    },
    reactjs: {
      isFetching: false,
      hasErrored: false,
      didInvalidate: false,
      items: [3, 4]
    }
  }
}

ReactDOM.render(
  <AppRouter>
    {/* <Provider store={createStore(mockInitialState)}> */}
    <Home />
    {/* </Provider> */}
  </AppRouter>,
  document.getElementById('root')
)
