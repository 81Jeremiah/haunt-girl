import React from 'react';
import { Link } from 'react-router-dom';



const InterviewsList = (props) =>{

  const listInterviews = props.interviews.map( interview => {
    return(
      <li key={interview.id}>
        <Link to={`admin/interviews/${interview.id}`}>{interview}</Link>
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

export default InterviewsList
