import { combineReducers } from 'redux'
import { posts, postsIsLoading, postsHasErrored } from './reducer-posts'
import { sortBy } from './reducer-sortBy'

const rootReducer = combineReducers({
  posts,
  postsIsLoading,
  postsHasErrored,
  sortBy
})

export default rootReducer
