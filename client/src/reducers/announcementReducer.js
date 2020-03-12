export default ( state =
  { loading: false,
    announcements: [],
    announcement: {}
  }, action) => {
  switch(action.type){

    case 'LOADING_ANNOUNCEMENTS':
      return {...state, loading: true}

    case 'FETCH_ANNOUNCEMENTS':
      return {...state, loading:false, announcements: action.announcements}

    case 'LOADING_ANNOUNCEMENT':
      return {...state, loading: true}

    case 'FETCH_ANNOUNCEMENT':
      return {...state, loading:false, announcement: action.announcement}

    default:
      return state
  }
}
