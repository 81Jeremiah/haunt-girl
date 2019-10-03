export default (state =
  {loading: false,
   cities: []
 }, action) => {

  switch(action.type){

    case "LOADING_CITIES":
      return {...state, loading: true}

    case "FETCH_CITIES":
      return {...state, loading: false, cities: action.cities  }


    default:
      return state
   }
 }
