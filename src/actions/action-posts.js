import axios from 'axios'

export function postsHasErrored (bool) {
  return {
    type: 'POSTS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function postsIsLoading (bool) {
  return {
    type: 'POSTS_IS_LOADING',
    isLoading: bool
  }
}

export function showPostForm (bool) {
  return {
    type: 'SHOW_POST_FORM',
    payload: bool
  }
}

export function showPostEditForm (bool) {
  return {
    type: 'SHOW_POST_EDIT_FORM',
    payload: bool
  }
}

export function postsSubmitting (bool) {
  return {
    type: 'POSTS_IS_SUBMITING',
    isSubmitting: bool
  }
}

export function postsFetchDataSuccess (posts) {
  return {
    type: 'POSTS_FETCH_DATA_SUCCESS',
    posts
  }
}

export function postSubmitSuccess (post) {
  return {
    type: 'POSTS_SUBMIT_SUCCESS',
    payload: post
  }
}

export function postSubmitError (err) {
  return {
    type: 'POSTS_SUBMIT_ERROR',
    payload: err
  }
}

export function postsRemovePost (index) {  // TODO: setup delete/remove a post
  return {
    type: 'POSTS_REMOVE_POST',
    index
  }
}

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '12345678'
  }
}

// thunk
export function postsFetchData (url) {
  return (dispatch) => {
    dispatch(postsIsLoading(true))
    axios.get(url, config)
      .then((res) => {
        dispatch(postsIsLoading(false))
        return res.data
      })
      .then((posts) => dispatch(postsFetchDataSuccess(posts)))
      .catch((err) => {
        console.error(`postsFetchData has errored: ${err}`)
        dispatch(postsHasErrored(true))
      })
  }
}

export function postsUpdateVoteResults (post) {
  return {
    type: 'POSTS_VOTE_SUCCESS',
    payload: post
  }
}

// thunk
export function submitPostVote (postId, vote) {
  return (dispatch) => {
    axios.post(`http://localhost:3001/posts/${postId}`, `{ "option": "${vote}" }`, config)
      .then((res) => {
        dispatch(postsUpdateVoteResults(res.data))
      })
      .catch(err => console.error(`Voting error: ${err}`))
      // ? TODO: posts vote error state, dispatch one
  }
}

// thunk
export function addPost (post) {
  return (dispatch) => {
    dispatch(postsSubmitting(true))
    dispatch(showPostForm(false))
    axios.post(`http://localhost:3001/posts`, post, config)
      .then((res) => {
        dispatch(postsSubmitting(false))
        return res.data
      })
      .then((post) => dispatch(postSubmitSuccess(post)))
      .catch((err) => {
        console.error(`submitting a post has errored: ${err}`)
        dispatch(postSubmitError(err))
      })
  }
}

// thunk
export function editPost (post, postId) {
  return (dispatch) => {
    dispatch(postsSubmitting(true))
    dispatch(showPostEditForm(false))
    axios.put(`http://localhost:3001/posts/${postId}`, post, config)
      .then((res) => {
        dispatch(postsSubmitting(false))
        return res.data
      })
      .then((post) => dispatch(postSubmitSuccess(post)))
      .catch((err) => {
        console.error(`Updating a post has errored: ${err}`)
        dispatch(postSubmitError(err))
      })
  }
}
