
export const fetchPosts = (category) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_POSTS'});
    return fetch('/api/categories' + category)

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

export const createPost = (newPost) => {
  // debugger
  return (dispatch) => {
    console.log(newPost)
    dispatch({type: 'SENDING_POST'});
      return fetch('/api/posts', {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify( newPost )
        body: newPost
      })
    .then(response => response.json())
    .then(post => {
      dispatch({type:'CREATE_POST', post:post});
    });
  }
}

export const fetchStates = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_STATES'});
      return fetch('/api/states')

    .then(response => response.json())
    .then(states => {
        return dispatch({type: 'FETCH_STATES', states:states})
    });
  }
}

//list the posts by stateclicked
export const narrowByState = (state) => {
  debugger
  return(dispatch) => {
    dispatch({type:'LOADING_POSTS'});
      return fetch('api/states/'+ state)
      .then(resp => resp.json())
      .then(posts => {
        dispatch({type:'FETCH_POSTS', posts: posts})
      });
  }
}
