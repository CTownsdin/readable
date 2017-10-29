import { combineReducers } from 'redux'
import { 
  postsIsLoading, 
  postsHasErrored, 
  postSubmitError, 
  postIsSubmitting, 
  showPostForm, 
  posts 
} from './reducer-posts'
import { comments, commentsIsLoading, commentsHasErrored } from './reducer-comments'
import { sort } from './reducer-sort'

const rootReducer = combineReducers({
  postsIsLoading, 
  postsHasErrored, 
  postSubmitError, 
  postIsSubmitting, 
  showPostForm, 
  posts,
  comments,
  commentsIsLoading,
  commentsHasErrored,
  sort
})

export default rootReducer
