export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_CREATORS'});
    return fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
      return dispatch({ type: 'FETCH_POSTS', posts: posts })
    })
  }
}
