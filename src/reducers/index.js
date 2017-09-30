import { combineReducers } from 'redux'
import { posts, postsIsLoading, postsHasErrored } from './reducer-posts'
import { sort } from './reducer-sortBy'

const rootReducer = combineReducers({
  posts,
  postsIsLoading,
  postsHasErrored,
  sort
})

export default rootReducer
