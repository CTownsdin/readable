import { combineReducers } from 'redux'
import { posts, postsIsLoading, postsHasErrored } from './reducer-posts'
import { comments, commentsIsLoading, commentsHasErrored } from './reducer-comments'
import { sort } from './reducer-sort'

const rootReducer = combineReducers({
  posts,
  postsIsLoading,
  postsHasErrored,
  comments,
  commentsIsLoading,
  commentsHasErrored,
  sort
})

export default rootReducer
