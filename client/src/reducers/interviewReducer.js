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

    case 'SENDING_INTERVIEW':
      return {...state, loading: true}

    case 'CREATE_INTERVIEW':
      return {...state, loading: false, list: action.interview}

    case 'UPDATE_INTERVIEW':
        return {...state, loading: false, list: action.interview}

    case 'DELETE_INTERVIEW':
        let remainingInterviews = this.state.interviews.filter(interview => interview !== action.interview)
        return {...state, interviews: remainingInterviews}


    default:
      return state
  }
}
