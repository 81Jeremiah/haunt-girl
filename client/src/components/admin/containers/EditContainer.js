import React, { Component } from 'react';
import { getPost } from '../../actions/postActions';
import { connect } from 'react-redux';
import EditForm from '../EditForm';

class EditContainer extends Component {

  componentDidMount(){
    
  }

  render(){
    return(
      <EditForm postData ={this.props.post} />
    )
  }
}


const mapStateToProps = state => ({
     post: state.posts.post
});


export default connect(mapStateToProps, {getPost})(EditContainer)
