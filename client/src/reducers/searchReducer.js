export default (state =
  {loading: false,
   foundPosts: []
   }
  , action) => {

  switch(action.type) {

    case 'SEARCHING':
      return { ...state, loading: true}

    case 'SEARCH_RESULTS':
      return {...state, loading: false, foundPosts: action.posts }

    case 'CLEAR_RESULTS':
      return {...state, foundPosts:[]}

    default:
      return state;
  }
}
