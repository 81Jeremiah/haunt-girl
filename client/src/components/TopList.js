import React from 'react';
import { Link } from 'react-router-dom';

const TopList = (props) =>{
  const lists = props.lists
  const listOfLists = lists.map(list => {
    return(
      <li key={list.id}>
      <h5><Link to={`/blog/topslist/${list.id}`}>{list.title}</Link></h5>
      </li>
    )


  })


  return(
    <ul>
     {listOfLists}
    </ul>
  )
}


export default TopList
