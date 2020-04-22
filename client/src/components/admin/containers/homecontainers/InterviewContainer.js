import React, { Component } from 'react';
import { getInterviews } from '../../../actions/interviewActions';
import { connect } from 'react-redux';
// import { withRouter, Redirect } from 'react-router-dom'
import InterviewLIst from '../../InterviewLIst';
import AdminHeader from '../../AdminHeader';

class InterviewContainer extends Component {

  componentDidMount(){
    this.props.getInterviews()
  }



  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />

      </div>
      <div>

        <InterviewLIst interviews={this.props.interviews}/>

      </div>
    </>
    )
  }
}

const mapStateToProps = state => {

    return {interviews: state.interviews.interviews}
};

export default connect(mapStateToProps, {getInterviews})(InterviewContainer);
