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
