import React from 'react';
// import AreaList from '.AreaList';

const TopLists = (props) =>{

  const list = props.lists.map( list => {
    return <li key={list.id}> list.title </li>
  })

  return (
    <ul>
     {list} 
    </ul>
  )

}


export default TopLists
