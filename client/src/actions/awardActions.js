export const createAward = (newAward) => {
  console.log(newAward)
  debugger
  return (dispatch) => {

    dispatch({type: 'SENDING_AWARD'});
      return fetch('/api/awards', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( newAward )
        // body: newAward
      })
    .then(response => response.json())
    .then(award => {
      dispatch({type:'CREATE_AWARD', award:award});
    });
  }
}

export const fetchWinners = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_AWARDS'});
    return fetch('/api/awards', {
      method: "GET"
    })
    .then(response => response.json())
    .then(award => {
      dispatch({type:'FETCH_AWARDS', award:award});
    });
  }
}
