import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import  {fetchInterview} from '../../../../actions/interviewActions';
import InterviewEditForm from '../../adminForms/editForms/InterviewEditForm';
import AdminHeader from '../../AdminHeader'

class InterviewEditContainer extends Component {

 componentDidMount(){
   const interviewId = this.props.match.params.id
   this.props.fetchInterview(interviewId)

 }


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

       <InterviewEditForm interview={this.state.interview}


        />

      </div>
    </>
    )
  }
}


  const mapStateToProps = state => {
      return {interview: state.interview.interview}
  };




export default InterviewEditContainer = withRouter(connect(mapStateToProps, {fetchInterview} )(InterviewEditContainer));
