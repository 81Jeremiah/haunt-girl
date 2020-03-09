export default ( state =
  { loading: false,
    interviews: [],
    interview: {}
  }, action) => {
  switch(action.type){

    case 'LOADING_INTERVIEWS':
      return {...state, loading: true}

    case 'FETCH_INTERVIEWS':
      return {...state, loading:false, interviews: action.interviews}

    case 'LOADING_INTERVIEW':
      return {...state, loading: true}

    case 'FETCH_INTERVIEW':
      return {...state, loading:false, interview: action.interview}

    default:
      return state
  }
}
