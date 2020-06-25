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
export const fetchWinner = (winnerId) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_AWARD'});
    return fetch('/api/awards/' + winnerId, {
      method: "GET"
    })
    .then(response => response.json())
    .then(award => {
      dispatch({type:'FETCH_AWARD', award:award});
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
    .then(awards => {
      dispatch({type:'FETCH_AWARDS', awards:awards});
    });
  }
}

export const deleteWinner = winnerId => {
  return (dispatch) => {
    return fetch(`/api/posts/${winnerId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(winner => {
      dispatch({type:'DELETE_AWARD', post: winner})
    })
    .catch(error => console.log(error))
  }
}

export const updateAward = (awardId, award) => {

  return (dispatch) => {
    dispatch({type: 'SENDING_AWARD'});
    return fetch(`/api/awards/${awardId}`, {
      method: "PATCH",
      // headers: {
      //   "Content-Type": 'application/json',
      //   "Authorization": `Bearer ${localStorage.auth_token}`
      // },
      body: award
    })
    .then(response => response.json())
    .then(award => {
      dispatch({type:'UPDATE_AWARD', award: award})
    })
    .catch(error => console.log(error))
  }
}
