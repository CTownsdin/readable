import axios from 'axios'

export function commentsHasErrored (bool) {
  return {
    type: 'COMMENTS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function commentsIsLoading (bool) {
  return {
    type: 'COMMENTS_IS_LOADING',
    isLoading: bool
  }
}

export function showCommentForm (bool) {
  return {
    type: 'SHOW_COMMENT_FORM',
    payload: bool
  }
}

export function showCommentEditForm (bool) {
  return {
    type: 'SHOW_COMMENT_EDIT_FORM',
    payload: bool
  }
}

export function commentsSubmitting (bool) {
  return {
    type: 'COMMENTS_IS_SUBMITING',
    isSubmitting: bool
  }
}

export function commentsFetchDataSuccess (comments) {  /// FIX
  return {
    type: 'COMMENTS_FETCH_DATA_SUCCESS',
    comments
  }
}

export function commentSubmitSuccess (comment) {
  return {
    type: 'COMMENTS_SUBMIT_SUCCESS',
    payload: comment
  }
}

export function commentSubmitError (err) {
  return {
    type: 'COMMENTS_SUBMIT_ERROR',
    payload: err
  }
}

export function commentsRemoveComment (commentId) {
  return {
    type: 'COMMENTS_REMOVE_COMMENT',
    commentId
  }
}

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '12345678'
  }
}

// thunk
export function commentsFetchData (url) {
  return (dispatch) => {
    dispatch(commentsIsLoading(true))
    axios.get(url, config)
      .then((res) => {
        dispatch(commentsIsLoading(false))
        return res.data
      })
      .then((comments) => dispatch(commentsFetchDataSuccess(comments)))
      .catch((err) => {
        console.error(`commentsFetchData has errored: ${err}`)
        dispatch(commentsHasErrored(true))
      })
  }
}

export function commentsUpdateVoteResults (comment) {
  return {
    type: 'COMMENTS_VOTE_SUCCESS',
    payload: comment
  }
}

// thunk
export function submitCommentVote (commentId, vote) {
  return (dispatch) => {
    axios.post(`http://localhost:3001/comments/${commentId}`, `{ "option": "${vote}" }`, config)
      .then((res) => {
        dispatch(commentsUpdateVoteResults(res.data))
      })
      .catch(err => console.error(`Voting error: ${err}`))
      // ? TODO: posts vote error state, dispatch one
  }
}

// thunk
export function addComment (comment) {
  return (dispatch) => {
    dispatch(commentsSubmitting(true))
    dispatch(showCommentForm(false))
    axios.post(`http://localhost:3001/comments`, comment, config)
      .then((res) => {
        dispatch(commentsSubmitting(false))
        return res.data
      })
      .then((comment) => dispatch(commentSubmitSuccess(comment)))
      .catch((err) => {
        console.error(`submitting a comment has errored: ${err}`)
        dispatch(commentSubmitError(err))
      })
  }
}

export function deleteComment (commentId) {
  return (dispatch) => {
    axios.delete(`http://localhost:3001/comments/${commentId}`, config)
      .then((res) => {
        dispatch(commentsRemoveComment(commentId))
      })
      .catch((err) => {
        console.error(`error deleting a comment: ${err}`)
      })
  }
}
