import React, { Component } from 'react';
import { getPost } from '../../../actions/postActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import EditForm from '../EditForm';
import AdminHeader from '../AdminHeader'
class EditContainer extends Component {

  componentDidMount(){
    const postId = this.props.match.params.id
    console.log(this.props)
    this.props.getPost(postId)
  }



  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

      <EditForm
        post={this.props.post}
        />

      </div>
    </>
    )
  }
}


const mapStateToProps = state => {
    console.log(state.posts.post)
    return {post: state.posts.post}
};

export default EditContainer = withRouter(connect(mapStateToProps, {getPost})(EditContainer));
