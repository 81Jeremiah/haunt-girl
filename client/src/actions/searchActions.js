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
