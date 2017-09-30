import { SORT_UPDATE } from '../actions/action-sortBy'

export function sortBy (state = {}, action) {
  switch (action.type) {
    case SORT_UPDATE:
      return {
        ...state,
        sortBy: action.payload
      }

    default:
      return state
  }
}
