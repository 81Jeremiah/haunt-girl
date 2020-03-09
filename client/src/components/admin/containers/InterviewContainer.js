import React, { Component } from 'react';
import { getPost } from '../../../actions/postActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import InterviewForm from '../InterviewForm';
import AdminHeader from '../AdminHeader'
class SkeletonKeyContainer extends Component {




  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

      <InterviewForm

        />

      </div>
    </>
    )
  }
}


const mapStateToProps = state => {
    console.log(state.posts.post)
    return {interview: state.interviews.interview}
};

export default SkeletonKeyContainer = withRouter(connect(mapStateToProps)(SkeletonKeyContainer));
