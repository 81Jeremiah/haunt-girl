export default ( state =
  { loading: false,
    awards: [],
  }, action) => {
  switch(action.type){

    case 'LOADING_AWARDS':
      return {...state, loading: true}

    case 'FETCH_AWARDS':
      return {...state, loading:false, awards: action.awards}

    default:
      return state
  }
}
