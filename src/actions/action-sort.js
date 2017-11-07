export function sortUpdate (sortType) {
  return {
    type: 'SORT_UPDATE',
    payload: sortType
  }
}

export function sortUpdateComments (sortType) {
  return {
    type: 'SORT_UPDATE_COMMENTS',
    payload: sortType
  }
}
