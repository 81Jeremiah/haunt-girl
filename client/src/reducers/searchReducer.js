export default (state =
  {loading: false,
   foundPosts: []
   }
  , action) => {

  switch(action.type) {

    case 'SEARCHING':
      return { loading: true}


    case 'SEARCH_RESULTS':
      return {loading: false, foundPosts: action.posts }

    default:
      return state;
  }
}
