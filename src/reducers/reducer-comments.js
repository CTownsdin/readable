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

export function comments (state = [], action) {
  switch (action.type) {
    case 'COMMENTS_FETCH_DATA_SUCCESS':
      return action.comments

    case 'COMMENTS_REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    case 'COMMENTS_VOTE_SUCCESS':
      const newComment = action.payload
      return [
        ...state.map((c) => c.id === newComment.id ? newComment : c)
      ]

    default:
      return state
  }
}
