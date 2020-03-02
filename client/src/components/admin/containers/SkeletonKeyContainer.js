import React, { Component } from 'react';
import { getPost } from '../../../actions/postActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import SkeletonKeyForm from '../SkeletonKeyForm';
import AdminHeader from '../AdminHeader'
class SkeletonKeyContainer extends Component {




  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

      <SkeletonKeyForm

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
