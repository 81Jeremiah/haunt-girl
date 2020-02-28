export const createAward = (newAward) => {
  // debugger
  return (dispatch) => {

    dispatch({type: 'SENDING_AWARD'});
      return fetch('/api/awards', {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify( newPost )
        body: newAward
      })
    .then(response => response.json())
    .then(award => {
      dispatch({type:'CREATE_AWARD', award:award});
    });
  }
}
