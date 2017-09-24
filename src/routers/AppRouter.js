import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../containers/Home'
import NotFoundPage from '../pages/NotFoundPage'
import Category from '../containers/Category'

const MockCategoryPage = ({ categoryTitle }) => (
  <div>
    <h1>{categoryTitle}</h1>
    <p>imagine posts about {categoryTitle} here</p>
  </div>
)

const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />  // TODO!  Use Category Page!
        <Route exact path='/react' component={() => <Category title='react' />} />
        <Route exact path='/redux' component={() => <Category title='redux' />} />
        <Route exact path='/running' component={() => <Category title='running' />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
