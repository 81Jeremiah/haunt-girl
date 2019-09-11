export default ( state =
  { loading: false,
    posts: [],
    post: {}
  }, action) => {
  switch(action.type){

    case 'LOADING_POSTS':
    return {...state, loading: true}

    case 'FETCH_POSTS':
    return {...state, loading:false, posts: action.posts}

    case 'LOADING_POST':
    return {...state, loading: true}

    case 'FETCH_POST':
    return {...state, loading:false, post: action.post}


    default:
      return state
  }
}
