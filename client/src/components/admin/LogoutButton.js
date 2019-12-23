import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/adminActions'



class LogoutButton extends Component {


  handleClick = (event) => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logout()
    console.log(this.props)
    window.location.href = "/admin/login"

    // this.props.history.replace('/admin/login')
  }

  render(){
    return(
      <button onClick={this.handleClick}>Logout</button>
    )
  }
}

export default connect(null,{logout})(LogoutButton)
