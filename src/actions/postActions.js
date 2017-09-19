// don't use axios, use isomorphic fetch

// import axios from 'axios'
// const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'
// const GET_POSTS_REJECTED = 'GET_POSTS_REJECTED'

// let token = localStorage.token
// if (!token) { token = localStorage.token = Math.random().toString(36).substr(-8) }
// const api = 'http://localhost:3001'
// const headers = {
//   'Accept': 'application/json',
//   'Authorization': token
// }

// export function fetchPosts () {
//   return function (dispatch) {
//     axios.get(api, {headers})
//       .then(res => dispatch({type: GET_POSTS_FULFILLED, payload: res.data}))
//       .catch(err => dispatch({type: GET_POSTS_REJECTED, payload: err}))
//   }
// }
