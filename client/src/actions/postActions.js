
export const fetchPosts = (category) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_POSTS'});
    return fetch('/api/categories/' + category)

    .then(response => response.json())
    .then(posts => {
      return dispatch({ type: 'FETCH_POSTS', posts: posts })
    });
  }
}



export const fetchAllPosts = () => {
  return(dispatch) => {
    dispatch({type: 'LOADING_POSTS'});
    return fetch('/api/posts')

    .then(response => response.json())
    .then(posts => {
      debugger
      return dispatch({type:'FETCH_POSTS', posts: posts})
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

export const updatePost = (postId, post) => {
  console.log(post)
  return (dispatch) => {
    dispatch({type: 'SENDING_POST'});
    return fetch(`/api/posts/${postId}`, {
      method: "PATCH",
      // headers: {
      //   "Content-Type": 'application/json',
      //   "Authorization": `Bearer ${localStorage.auth_token}`
      // },
      body: post
    })
    .then(response => response.json())
    .then(post => {
      dispatch({type:'UPDATE_POST', post: post})
    })
    .catch(error => console.log(error))
  }
}

export const deletePost = postId => {
  return (dispatch) => {
    return fetch(`/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(post => {
      dispatch({type:'DELETE_POST', post: post})
    })
    .catch(error => console.log(error))
  }
}

export const fetchRecentPosts = () =>{
  return(dispatch) => {
      dispatch({type: 'LOADING_POSTS'});
      return fetch('api/posts/recentposts')
      .then(response => response.json())
      .then(posts => {

        return dispatch({ type: 'FETCH_POSTS', posts: posts })
      });
  }
}

export const resetState = () => {
  return(dispatch) => {
     dispatch({type: 'RESET_STATE'});
  }  
}
