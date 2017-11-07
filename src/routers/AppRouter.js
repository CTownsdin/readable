import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../containers/Home'
import Category from '../containers/Category'
import PostDetails from '../containers/PostDetails'
import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* Category Pages, showing Posts */}
        <Route exact path='/react' component={() => <Category title='React Posts' postsCategory='react' />} />
        <Route exact path='/redux' component={() => <Category title='Redux Posts' postsCategory='redux' />} />
        <Route exact path='/running' component={() => <Category title='Running Posts' postsCategory='running' />} />
        <Route exact path='/post/:postId' render={(props) => <PostDetails {...props} />} />
        <Route exact path='/:category/:postId' render={(props) => <PostDetails {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
