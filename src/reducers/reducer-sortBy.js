import { SORT_UPDATE } from '../actions/action-sortBy'

export function sort (state = {}, action) {
  switch (action.type) {
    case SORT_UPDATE:
      return {
        ...state,
        sort: action.payload
      }

    default:
      return state
  }
}
