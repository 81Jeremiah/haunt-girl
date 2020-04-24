import React from 'react';
import { Link } from 'react-router-dom';



const TopListList = (props) =>{

  const listLists = props.toplists.map( toplist => {
    return(
      <li key={toplist.id}>
        <Link to={`edit/${toplist.id}`}>{toplist.title}</Link>
      </li>
    );
  });

  return(
    <div>
      <ul>
        { listLists }
      </ul>
    </div>
  );
}

export default TopListList
