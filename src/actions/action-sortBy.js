export const SORT_UPDATE = 'SORT_UPDATE'

export function sort (sort) {
  return {
    type: SORT_UPDATE,
    payload: sort
  }
}
