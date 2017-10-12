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

export function postsFetchDataSuccess (posts) {
  return {
    type: 'POSTS_FETCH_DATA_SUCCESS',
    posts
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
export function submitVote (postId, vote) {
  return (dispatch) => {
    axios.post(`http://localhost:3001/posts/${postId}`, `{ "option": "${vote}" }`, config)
      .then((res) => {
        dispatch(postsUpdateVoteResults(res.data))
      })
      .catch(err => console.error(`Voting error: ${err}`))
      // ? TODO: posts vote error state, dispatch one
  }
}
