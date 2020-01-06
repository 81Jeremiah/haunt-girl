// export const authenticate = (credentials) => {
//   console.log("calling function")
//   return dispatch => {
//     dispatch(authRequest())
//     return fetch(`/api/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify( credentials )
//     })
//     .then(response => response.json())
//     .then(({ auth_token }) => {
//       if (!auth_token) return false
//       localStorage.setItem('auth_token', auth_token);
//       return getUser(credentials)
//     })
//     .then((user) => {
//       if (user === false) return false
//         dispatch(authSuccess(user, localStorage.auth_token))
//     })
//     .catch((errors) => {
//       dispatch(authFailure(errors))
//       localStorage.clear()
//     })
//   }
// }





export const adminLoginFetch = admin => {
  return dispatch => {
    dispatch({type: 'LOADING_USER'});
    return fetch("/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({admin})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data)
          dispatch(handleError(data.message))
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.admin))

        }
      })
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    user: userObj
});

const handleError = msg => ({
    type: 'LOGIN_ERROR',
    error: msg

});


export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      debugger
      return fetch("/api/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            console.log(data)
            dispatch(loginUser(data.admin))
          }
      });
    }
  }
}

export const logout = () => ({
  type: 'LOGOUT_USER'

});
