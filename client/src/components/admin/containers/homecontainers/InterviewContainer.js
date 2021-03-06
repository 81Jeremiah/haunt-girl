import React, { Component, useEffect } from 'react';
import { fetchInterviews } from '../../../../actions/interviewActions';
import { connect } from 'react-redux';
// import { withRouter, Redirect } from 'react-router-dom'
import InterviewList from '../../InterviewList';
import AdminHeader from '../../AdminHeader';
import { Link } from 'react-router-dom';

class InterviewContainer extends Component {

  componentDidMount(){
    this.props.fetchInterviews()

  }

  // useEffect(() => {
  //   this.props.fetchInterviews()
  // });

  // componentDidUpdate(prevProps){
  //   console.log(prevProps.interviews === this.props.interviews, prevProps.interviews,  this.props.interviews)
  //   if (this.props.interviews !== prevProps.interviews){
  //     console.log("something has changed")
  //    // this.props.fetchInterviews()
  //  }
  // }



  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />

      </div>
      <div>

        <InterviewList interviews={this.props.interviews} reloadPage={this.reloadPage}/>
        <Link to={`/admin/interviews/new`}> Create New </Link>

      </div>
    </>
    )
  }
}

const mapStateToProps = state => {

    return {interviews: state.interviews.interviews}
};

export default connect(mapStateToProps, {fetchInterviews})(InterviewContainer);
