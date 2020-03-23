export const createList = (newList) => {


  return (dispatch) => {

    dispatch({type: 'SENDING_LIST'});
      return fetch('/api/lists', {
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
