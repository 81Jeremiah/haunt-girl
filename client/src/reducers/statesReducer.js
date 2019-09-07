export default (state =
  {loading: false,
   states: []
 }, action) => {

  switch(action.type){

    case "LOADING_STATES":
      return {...state, loading: true}

    case "FETCH_STATES":
      return {...state, loading: false, states: action.states  }


    default:
      return state
  }



 }
