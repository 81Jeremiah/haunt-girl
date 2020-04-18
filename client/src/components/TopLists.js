import React from 'react';
import ListLists from './ListLists';
// import AreaList from '.AreaList';

const TopLists = (props) =>{

  const list = props.lists.map( list => {
    return <li key={list.id}>
           <h5>{list.title}</h5>
           <ol>
              <ListLists posts={list.posts} />
           </ol>
           </li>
  })

  return (
    <ul>
     {list}
    </ul>
  )

}


export default TopLists
