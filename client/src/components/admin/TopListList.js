import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {deleteList} from '../../actions/listActions';


const TopListList = (props) =>{

  const handleClick = (list) => {
    props.deleteList(list)
  }

  const listLists = props.toplists.map( toplist => {
    return(
      <li key={toplist.id}>
        <Link to={`toplists/${toplist.id}/edit`}>{toplist.title}</Link>
      <span onClick={() => handleClick(toplist.id)}>(x)</span>

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

export default connect(null,{deleteList})(TopListList)
