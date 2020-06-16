export const createAnnouncement = (announcement) => {
  debugger
  return (dispatch) => {

    dispatch({type: 'SENDING_ANNOUNCEMENT'});
      return fetch('/api/announcements', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( announcement )
        // body: newAward
      })
    .then(response => response.json())
    .then(announcement => {
      dispatch({type:'CREATE_ANNOUNCEMENT', announcement:announcement});
    });
  }
}

export const fetchAnnouncements = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_ANNOUNCEMENTS'});
    return fetch('/api/announcements', {
      method: "GET"
    })
    .then(response => response.json())
    .then(announcements => {
      dispatch({type:'FETCH_ANNOUNCEMENTS', announcements:announcements});
    });
  }
}

export const getAnnouncement = (announcementId) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_ANNOUNCEMENT'});
      return fetch('/api/announcements/'+ announcementId)

    .then(response => response.json())
    .then(announcement => {
        return dispatch({type: 'FETCH_ANNOUNCEMENT', announcement:announcement})
    });
  }
}

export const deleteAnnouncement = announcementId => {
  return (dispatch) => {
    return fetch(`/api/announcements/${announcementId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(announcement => {
      dispatch({type:'DELETE_ANNOUNCEMENT', announcement: announcement})
    })
    .catch(error => console.log(error))
  }
}
