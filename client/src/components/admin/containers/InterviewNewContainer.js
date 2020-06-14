import React, { Component } from 'react';
import { getInterview } from '../../../actions/interviewActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import InterviewForm from '../InterviewForm';
import AdminHeader from '../AdminHeader';

class InterviewContainer extends Component {


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

export default InterviewContainer

// const mapStateToProps = state => {
//
//     return {interview: state.interviews.interview}
// };
//
// export default InterviewContainer = withRouter(connect(mapStateToProps, {getInterview})(InterviewContainer));
