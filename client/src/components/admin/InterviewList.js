import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {deleteInterview} from '../../actions/interviewActions';


const InterviewsList = (props) =>{

  const handleDelete = (interviewId) => {
    props.deleteInterview(interviewId)
  }

  const listInterviews = props.interviews.map( interview => {
    return(
      <li key={interview.id}>
        <Link to={`${interview.id}/edit`}>{interview.title}</Link>
       <span onClick={() => handleDelete(interview.id)}>(x)</span>
      </li>
    );
  });

  return(
    <div>
      <ul>
        { listInterviews }
      </ul>
    </div>
  );
}

export default connect(null,{deleteInterview})(InterviewsList)
