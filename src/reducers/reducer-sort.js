export function sort (state = '', action) {
  switch (action.type) {
    case 'SORT_UPDATE':
      return action.payload

    default:
      return state
  }
}
