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

    case 'SENDING_POST':
      return {...state, loading: true}

    case 'CREATE_POST':
      return {...state, loading: false, post: action.post}

    case 'UPDATE_POST':
      return {...state, loading: false, post: action.post}

    case 'DELETE_POST':
      let remainingPosts = this.state.posts.filter(post => post !== action.post)
      return {...state, posts: remainingPosts}

    default:
      return state
  }
}
