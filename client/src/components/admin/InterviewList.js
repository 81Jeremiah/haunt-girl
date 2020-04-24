import React from 'react';
import { Link } from 'react-router-dom';



const InterviewsList = (props) =>{

  const listInterviews = props.interviews.map( interview => {
    return(
      <li key={interview.id}>
        <Link to={`edit/${interview.id}`}>{interview.title}</Link>
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
