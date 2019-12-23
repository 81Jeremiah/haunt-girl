import React, {Component} from 'react';
import {connect} from 'react-redux';
import {adminLoginFetch} from '../../actions/adminActions';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.adminLoginFetch(this.state)
    // console.log(this.props.admin)
    //
    // //add component update to check if authorized
    // if (this.props.admin.authorized){
    //   window.alert("You're logged in.")
    //   debugger
    //   this.props.history.push("/admin/home")
    // } else {
    //   window.alert("Sorry, something went wrong. Please try logging in again.")
    // }
  }

  componentDidUpdate = (prevProps) => {
  //
  if (this.props.admin !== prevProps.admin ) {
    console.log(this.props.user)
    if (this.props.admin.authorized) {
      window.location.href = "/admin/home"
      // this.props.history.push('/admin/home')
      window.alert("You're Logged In!")
    } else if(this.props.admin.error) {
      window.alert("Sorry, something went wrong. Please try logging in again.")
    }
 }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  admin: state.admin
})

export default connect(mapStateToProps, {adminLoginFetch})(Login)
