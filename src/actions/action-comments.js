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

export function commentsFetchDataSuccess (comments) {  /// FIX
  return {
    type: 'COMMENTS_FETCH_DATA_SUCCESS',
    comments
  }
}

export function commentsRemoveCommne (index) {  // TODO: setup delete/remove a comment
  return {
    type: 'COMMENTS_REMOVE_COMMENT',
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

// thunk  // TODO:  ...
// export function submitVote (commentId, vote) {
//   return (dispatch) => {
//     axios.post(`http://localhost:3001/posts/${commentId}`, `{ "option": "${vote}" }`, config)
//       .then((res) => {
//         dispatch(commentsUpdateVoteResults(res.data))
//       })
//       .catch(err => console.error(`Voting error: ${err}`))
//       // ? TODO: posts vote error state, dispatch one
//   }
// }
