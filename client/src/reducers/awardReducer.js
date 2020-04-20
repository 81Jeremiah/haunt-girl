export default ( state =
  { loading: false,
    awards: [],
    award: {}
  }, action) => {
  switch(action.type){

    case 'LOADING_AWARDS':
      return {...state, loading: true}

    case 'FETCH_AWARDS':
      return {...state, loading:false, awards: action.awards}

    case 'LOADING_AWARD':
        return {...state, loading: true}

    case 'FETCH_AWARD':
        return {...state, loading:false, award: action.award}

    case 'SENDING_AWARD':
      return {...state, loading: true}

    case 'CREATE_AWARD':
      return {...state, loading: false, award: action.award}

    case 'UPDATE_AWARD':
        return {...state, loading: false, award: action.award}



    default:
      return state
  }
}
