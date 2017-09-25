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

// Thunk
export function postsGET (url) {
  return (dispatch) => {
    dispatch(postsIsLoading(true))
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '12345678'
      }
    }
    axios.get(url, config)
      .then((response) => {
        dispatch(postsIsLoading(false))
        return response
      })
      .then((posts) => dispatch(postsFetchDataSuccess(posts)))
      .catch((err) => {
        console.error(`postsGET has errored: ${err}`)
        dispatch(postsHasErrored(true))
      })
  }
}
