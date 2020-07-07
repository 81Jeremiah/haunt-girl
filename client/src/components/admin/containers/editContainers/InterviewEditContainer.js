import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import  {fetchInterview} from '../../../../actions/interviewActions';
import InterviewEditForm from '../../adminForms/editForms/InterviewEditForm';
import AdminHeader from '../../AdminHeader'

class InterviewEditContainer extends Component {

 componentDidMount(){
   const interviewId = this.props.match.params.id
   console.log(interviewId)
   this.props.fetchInterview(interviewId)

 }


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

       <InterviewEditForm interview={this.props.interview}


        />

      </div>
    </>
    )
  }
}


  const mapStateToProps = state => {
      console.log(state)
      return {interview: state.interviews.interview}
  };




export default InterviewEditContainer = withRouter(connect(mapStateToProps, {fetchInterview} )(InterviewEditContainer));
