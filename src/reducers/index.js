import { combineReducers } from 'redux'
import { 
  postsIsLoading, 
  postsHasErrored, 
  postSubmitError, 
  postIsSubmitting,
  showPostForm,
  showPostEditForm,
  posts 
} from './reducer-posts'
import { 
  commentsIsLoading, 
  commentsHasErrored,
  showCommentForm,
  showCommentEditForm,
  comments
} from './reducer-comments'
import { sort } from './reducer-sort'

const rootReducer = combineReducers({
  postsIsLoading, 
  postsHasErrored, 
  postSubmitError, 
  postIsSubmitting,
  showPostForm,
  showPostEditForm,
  posts,

  commentsIsLoading, 
  commentsHasErrored,
  showCommentForm,
  showCommentEditForm,
  comments,
  
  sort
})

export default rootReducer
