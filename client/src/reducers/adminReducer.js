
  export default ( state =
    { currentUser: {},
      error: "",
      authorized: false,
      loading: false
    }, action) => {

    switch(action.type){
      case 'LOADING_USER':
        return {...state, loading: true}

      case 'LOGIN_USER':
        return {...state, currentUser: action.user, authorized: true, loading: false}

      case 'LOGIN_ERROR':
        return {...state, error: action.error}

      case 'LOGOUT_USER':
        return {currentUser: {}, authorized: false}

      default:
        return state
    }
  }
