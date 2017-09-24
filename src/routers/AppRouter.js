import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../containers/Home'
import NotFoundPage from '../pages/NotFoundPage'
import Category from '../containers/Category'

const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/react' component={() => <Category title='react' />} />
        <Route exact path='/redux' component={() => <Category title='redux' />} />
        <Route exact path='/running' component={() => <Category title='running' />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
