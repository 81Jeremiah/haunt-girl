export default ( state =
  { loading: false,
    lists: [],
    list: {}
  }, action) => {
  switch(action.type){

    case 'LOADING_LISTS':
      return {...state, loading: true}

    case 'FETCH_LISTS':
      return {...state, loading:false, lists: action.lists}

    case 'LOADING_LIST':
      return {...state, loading: true}

    case 'FETCH_LIST':
      return {...state, loading:false, list: action.list}

    case 'SENDING_LIST':
      return {...state, loading: true}

    case 'CREATE_LIST':
      return {...state, loading: false, list: action.list}

    case 'UPDATE_LIST':
        return {...state, loading: false, list: action.list}


    default:
      return state
  }
}
