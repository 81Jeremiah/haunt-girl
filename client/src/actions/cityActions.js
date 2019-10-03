export const fetchCities = (state) =>{
  return(dispatch) =>{
    dispatch({type:'LOADING_CITIES'});
    return fetch('api/cities/get_cities_in_state/'+ state)

    .then(resp => resp.json())
    .then(states => {
      dispatch({type:'FETCH_STATES', states: states})
    });
  }
}
