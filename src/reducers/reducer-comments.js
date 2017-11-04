// will appear in app state with the same name by design of combineReducers()
export function commentsIsLoading (state = false, action) {
  switch (action.type) {
    case 'COMMENTS_IS_LOADING':
      return action.isLoading

    default:
      return state
  }
}

export function commentsHasErrored (state = false, action) {
  switch (action.type) {
    case 'COMMENTS_HAS_ERRORED':
      return action.hasErrored

    default:
      return state
  }
}

export function showCommentForm (state = false, action) {
  switch (action.type) {
    case 'SHOW_COMMENT_FORM':
      return action.payload

    default:
      return state
  }
}

export function showCommentEditForm (state = {show: false, id: ''}, action) {
  switch (action.type) {
    case 'SHOW_COMMENT_EDIT_FORM':
      return { show: action.payload, id: action.commentId }

    default:
      return state
  }
}

export function commentsIsSubmitting (state = false, action) {
  switch (action.type) {
    case 'COMMENTS_IS_SUBMITTING':
      return action.isSubmitting

    default:
      return state
  }
}

export function commentSubmitError (state = '', action) {
  switch (action.type) {
    case 'COMMENTS_SUBMIT_ERROR':
      return action.payload

    default:
      return state
  }
}

export function comments (state = [], action) {
  switch (action.type) {
    case 'COMMENTS_FETCH_DATA_SUCCESS':
      return action.comments

    case 'COMMENTS_REMOVE_COMMENT':
      const index = state.findIndex(c => c.id === action.commentId)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case 'COMMENTS_VOTE_SUCCESS':
      const updatedComment = action.payload
      return [
        ...state.map((c) => c.id === updatedComment.id ? updatedComment : c)
      ]

    case 'COMMENTS_SUBMIT_SUCCESS':
      const newComment = action.payload
      return [
        ...state, newComment
      ]

    case 'COMMENTS_EDIT_SUCCESS':
      const editedComment = action.payload
      return [
        ...state.map((c) => c.id === editedComment.id ? editedComment : c)
      ]

    default:
      return state
  }
}
