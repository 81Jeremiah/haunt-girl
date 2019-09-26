
  export default ( state =
    { currentUser: {},
      error: "",
      authorized: false
    }, action) => {

    switch(action.type){

      case 'LOGIN_USER':
        return {...state, currentUser: action.user, authorized: true}

      case 'LOGIN_ERROR':
        return {...state, error: action.error}

      default:
        return state
    }
  }
