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

export const fetchInterview = (interviewId) => {
  debugger
  return (dispatch) => {
    dispatch({type: 'LOADING_INTERVIEW'});
    return fetch('/api/interviews/'+interviewId, {
      method: "GET"
    })
    .then(response => response.json())
    .then(interview => {
      dispatch({type:'FETCH_INTERVIEW', interview:interview});
    });
  }
}

export const deleteInterview = interviewId => {
  return (dispatch) => {
    return fetch(`/api/interviews/${interviewId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(interview => {
      dispatch({type:'DELETE_INTERVIEW', interview: interview})
    })
    .catch(error => console.log(error))
  }
}


export const updateInterview = (interviewId, interview) => {

  return (dispatch) => {
    dispatch({type: 'SENDING_AWARD'});
    return fetch(`/api/interviews/${interviewId}`, {
      method: "PATCH",
      // headers: {
      //   "Content-Type": 'application/json',
      //   "Authorization": `Bearer ${localStorage.auth_token}`
      // },
      body: interview
    })
    .then(response => response.json())
    .then(interview => {
      dispatch({type:'UPDATE_INTERVIEW', interview: interview})
    })
    .catch(error => console.log(error))
  }
}
