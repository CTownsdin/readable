export default function posts (state = {}, action) {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload
      }
    // case GET_POSTS_REJECTED :
    default:
      return state
  }
}
