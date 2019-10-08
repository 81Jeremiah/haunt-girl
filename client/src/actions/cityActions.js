export const fetchCities = (state) =>{
  return(dispatch) =>{
    dispatch({type:'LOADING_CITIES'});
    return fetch('api/cities/cities_in_state/?id='+ state)

    .then(resp => resp.json())
    .then(states => {
      dispatch({type:'FETCH_STATES', states: states})
    });
  }
}
