import React, { Component } from 'react';
import { getPost } from '../../../actions/postActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import EditForm from '../EditForm';
import AdminHeader from '../AdminHeader'
class SkeletonKeyContainer extends Component {




  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

      <EditForm
        
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

export default SkeletonKeyContainer = withRouter(SkeletonKeyContainer);
