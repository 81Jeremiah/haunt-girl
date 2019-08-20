export default ( state =
  { loading: false,
    posts: []

}
, action) => {
  switch(action.type){

    case 'LOADING_POSTS':
    return {...state, loading: true}

    case 'FETCH_POSTS':
    return {...state, loading:false, posts: action.posts}

    default:
      return state
  }
}
