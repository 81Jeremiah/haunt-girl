export const fetchStatesWithPosts = () =>{
  return(dispatch) =>{
    dispatch({type:'LOADING_STATES'});
    return fetch('api/states/with_posts')

    .then(resp => resp.json())
    .then(states => {
      dispatch({type:'FETCH_STATES', states: states})
    });
  }
}
