export const fetchStatesWithPosts = (category) =>{
  return(dispatch) =>{
    dispatch({type:'LOADING_STATES'});
    return fetch('api/states/with_posts/?id='+ category)

    .then(resp => console.log(resp))
    // resp.json()
    .then(states => {
      dispatch({type:'FETCH_STATES', states: states})
    });
  }
}
