export function sort (state = 'voteScore', action) {
  switch (action.type) {
    case 'SORT_UPDATE':
      return action.payload

    default:
      return state
  }
}

export function sortComments (state = 'voteScore', action) {
  switch (action.type) {
    case 'SORT_UPDATE_COMMENTS':
      return action.payload

    default:
      return state
  }
}
