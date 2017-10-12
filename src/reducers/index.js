import { combineReducers } from 'redux'
import { posts, postsIsLoading, postsHasErrored } from './reducer-posts'
import { sort } from './reducer-sort'

const rootReducer = combineReducers({
  posts,
  postsIsLoading,
  postsHasErrored,
  sort
})

export default rootReducer
