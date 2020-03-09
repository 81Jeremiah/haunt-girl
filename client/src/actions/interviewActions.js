export const createInterview = (interview) => {
  return (dispatch) => {

    dispatch({type: 'SENDING_INTERVIEW'});
      return fetch('/api/interviews', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( interview )
        // body: newAward
      })
    .then(response => response.json())
    .then(interview => {
      dispatch({type:'CREATE_INTERVIEW', interview:interview});
    });
  }
}

export const fetchInterviews = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_INTERVIEWS'});
    return fetch('/api/interviews', {
      method: "GET"
    })
    .then(response => response.json())
    .then(interviews => {
      dispatch({type:'FETCH_INTERVIEWS', interviews:interviews});
    });
  }
}
