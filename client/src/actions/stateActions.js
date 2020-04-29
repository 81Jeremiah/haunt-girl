export const fetchStatesWithPosts = (category) =>{
  return(dispatch) =>{
    dispatch({type:'LOADING_STATES'});
    return fetch('/api/states/with_posts/?id='+ category)

    .then(resp => resp.json())
    // resp.json()
    .then(states => {
      dispatch({type:'FETCH_STATES', states: states})
    });
  }
}
