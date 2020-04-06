export const search = (query) => {
  return (dispatch) => {
    dispatch({type: 'SEARCHING'});
    return fetch(`/api/posts/search?title=${query}`)
    .then(response => response.json())
    .then(posts => {
      return dispatch({ type: 'SEARCH_RESULTS', posts: posts })
    })
  }
}


export const escapeRoomSearch = (query) => {
  return (dispatch) => {
    dispatch({type: 'SEARCHING'});
    return fetch(`/api/posts/escape_room_search?title=${query}`)
    .then(response => response.json())
    .then(posts => {
      return dispatch({ type: 'SEARCH_RESULTS', posts: posts })
    })
  }
}

export const removeFound = (escaperoom) => {

  return (dispatch) => {
    dispatch({type: 'CLEAR_RESULTS', escaperoom: escaperoom });
  }
}
