export const createList = (newList) => {


  return (dispatch) => {

    dispatch({type: 'SENDING_LIST'});
      return fetch('/api/top_lists', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( newList)
        // body: newAward
      })
    .then(response => response.json())
    .then(list => {
      dispatch({type:'CREATE_LIST', list:list});
    });
  }
}

export const fetchLists = () =>{
  return (dispatch) => {
    dispatch({type: 'LOADING_LISTS'});
    return fetch('/api/top_lists/')

    .then(response => response.json())
    .then(lists => {
      return dispatch({ type: 'FETCH_LISTS', lists: lists })
    });
  }

}


export const fetchList = (listId) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_LIST'});
    return fetch('/api/top_lists/' + listId)

    .then(response => response.json())
    .then(list => {
      return dispatch({ type: 'FETCH_LIST', list: list })
    });
  }
}

export const updateList = (listId, list) => {
  console.log(list)
  return (dispatch) => {
    dispatch({type: 'SENDING_LIST'});
    return fetch(`/api/top_lists/${listId}`, {
      method: "PATCH",
      // headers: {
      //   "Content-Type": 'application/json',
      //   "Authorization": `Bearer ${localStorage.auth_token}`
      // },
      body: list
    })
    .then(response => response.json())
    .then(post => {
      dispatch({type:'UPDATE_LIST', list: list})
    })
    .catch(error => console.log(error))
  }
}

export const deleteList = listId => {
  return (dispatch) => {
    return fetch(`/api/top_lists/${listId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(list => {
      dispatch({type:'DELETE_LIST', list: list})
    })
    .catch(error => console.log(error))
  }
}
