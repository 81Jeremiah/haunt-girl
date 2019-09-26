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

    if (this.props.user && this.props.user.authorized) {

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

const mapStateToProps = state => {
  console.log(state)
  return {user: state.admin}
}

export default connect(mapStateToProps, {getProfileFetch})(App);
