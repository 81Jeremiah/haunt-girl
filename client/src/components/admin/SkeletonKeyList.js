import React from 'react';
import { Link } from 'react-router-dom';



const SkeletonKeyList = (props) =>{

  const awardsList = props.awards.map( award => {
    return(
      <li key={award.id}>
        <Link to={`${award.id}/edit`}>{award.title}</Link>
      </li>
    );
  });

  return(
    <div>
      <ul>
        { awardsList }
      </ul>
    </div>
  );
}

export default SkeletonKeyList
