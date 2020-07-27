import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import AdminRoutes from './AdminRoutes';
import {connect} from 'react-redux';
import {getProfileFetch} from './actions/adminActions'




// const mapStateToProps = state => {
// return {
//   isAuthenticated: state.auth.isAuthenticated,
//   user: state.auth.currentUser,
// }
// }
//
// export default connect(mapStateToProps, { checkToken })(App);


class App extends Component {
  // componentWillMount = () => {
  //   // This conditional will check the users auth_token after they have logged in and make sure they are authenticated
  //   // looks in localStorage for a token and if true, it authenticates the token
  //   if (localStorage.getItem("auth_token")) {
  //     this.props.checkToken(localStorage.getItem("auth_token"))
  //   // if that fails it will check the window location, if location is anywhere but login, signup, or /
  //   // it will clear the token and redirect to the login
  //   } else if (!window.location.href.includes('login') && !window.location.href.includes('signup') && !(window.location.pathname === '/')) {
  //     localStorage.clear()
  //     window.location.href = "/login"
  //   }
  // }
  //
  // render() {
  //   const {isAuthenticated, user} = this.props
  //   console.log(isAuthenticated)
  //
  //   return (
  //     <Routes isAuthenticated={isAuthenticated} user={user}/>
  //   );
  // }
  // }

  componentWillMount = () => {
    this.props.getProfileFetch()
  }

//   componentDidUpdate(prevProps) {
//   // Typical usage (don't forget to compare props):
//   if (this.props.userID !== prevProps.userID) {
//     this.fetchData(this.props.userID);
//   }
// }

 render() {

    // if (this.props.user && this.props.user.authorized) {
    //
    //   return (
    //   <div className="App">
    //     <>
    //
    //       <AdminRoutes authorized={this.props.user.authorized} />
    //       <Routes />
    //     </>
    //    </div>
    //  );
    // }else{}
      return(
        <div>
          <Routes authorized={this.props.user.authorized}/>
        </div>
      );
    }
  }


const mapStateToProps = state => {
  console.log(state)
  return {user: state.admin}
}

export default connect(mapStateToProps, {getProfileFetch})(App);
