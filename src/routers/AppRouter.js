import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import AddExpensePage from '../components/AddExpensePage'
// import EditExpensePage from '../components/EditExpensePage'
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
// import Header from '../components/Header'
// import HelpPage from '../components/HelpPage'
import Home from '../containers/Home'
import NotFoundPage from '../pages/NotFoundPage'

const MockCategoryPage = ({ categoryTitle }) => (
  <div>
    <h1>{categoryTitle}</h1>
    <p>imagine posts about {categoryTitle} here</p>
  </div>
)

const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/react' component={MockCategoryPage} />
        <Route exact path='/redux' component={MockCategoryPage} />
        <Route exact path='/3dprinting' component={MockCategoryPage} />
        <Route exact path='/running' component={MockCategoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
