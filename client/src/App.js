import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import AdminRoutes from './AdminRoutes';
import {connect} from 'react-redux';
import {getProfileFetch} from './actions/adminActions'


class App extends Component {
  componentWillMount = () => {
    this.props.getProfileFetch()
  }


 render() {

    if (localStorage.token) {
      console.log(localStorage.token)
      return (
      <div className="App">
        <>
          <Routes />
          <AdminRoutes />
        </>
       </div>
     );
    }else{
      return(
        <div>
          <Routes />
        </div>
      );
    }
  }
}


export default connect(null, {getProfileFetch})(App);
