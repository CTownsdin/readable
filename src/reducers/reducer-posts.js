// will appear in app state with the same name by design of combineReducers()
export function postsIsLoading (state = false, action) {
  switch (action.type) {
    case 'POSTS_IS_LOADING':
      return action.isLoading

    default:
      return state
  }
}

export function postsHasErrored (state = false, action) {
  switch (action.type) {
    case 'POSTS_HAS_ERRORED':
      return action.hasErrored

    default:
      return state
  }
}

export function postSubmitError (state = "", action) {
  switch (action.type) {
    case 'POSTS_SUBMIT_ERROR':
      return action.payload
      
    default:
      return state
  }
}

export function postIsSubmitting (state = false, action) {
  switch (action.type) {
    case 'POSTS_IS_SUBMITTING':
      return action.isSubmitting

    default:
      return state
  }
}

export function showPostForm (state = false, action) {
  switch (action.type) {
    case 'SHOW_POST_FORM':
      return action.payload

    default:
      return state
  }  
}

export function showPostEditForm (state = false, action) {
  switch (action.type) {
    case 'SHOW_POST_EDIT_FORM':
      return action.payload

    default:
      return state
  }  
}

export function posts (state = [], action) {
  switch (action.type) {
    case 'POSTS_FETCH_DATA_SUCCESS':
      return action.posts

    case 'POSTS_REMOVE_POST':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    case 'POSTS_VOTE_SUCCESS':
      const updatedPost = action.payload
      // console.log(`reducing: ${JSON.stringify(newPost, null, 2)}`)
      return [
        ...state.map((p) => p.id === updatedPost.id ? updatedPost : p)
      ]

    case 'POSTS_SUBMIT_SUCCESS':
      const newPost = action.payload
      return [
        ...state, newPost
      ]
    
    default:
      return state
  }
}
