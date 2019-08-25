
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_POSTS'});
    return fetch('/api/posts')

    .then(response => response.json())
    .then(posts => {
      return dispatch({ type: 'FETCH_POSTS', posts: posts })
    });
  }
}


export const getPost = (postId) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_POST'});
      return fetch('/api/posts/'+ postId)

    .then(response => response.json())
    .then(post => {
        return dispatch({type: 'FETCH_POST', post:post})
    });
  }
}
