import { combineReducers } from 'redux'
import { posts, postsIsLoading, postsHasErrored } from './reducer-posts'

const rootReducer = combineReducers({
  posts,
  postsIsLoading,
  postsHasErrored
})

export default rootReducer
