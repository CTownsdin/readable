export const SORT_UPDATE = 'SORT_UPDATE'

export function sortBy (sort) {
  return {
    type: SORT_UPDATE,
    payload: sort
  }
}
