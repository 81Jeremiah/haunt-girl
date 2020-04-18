import React from 'react';
import {Link} from 'react-router-dom'

// import AreaList from '.AreaList';

const ListLists = (props) =>{

  const listposts = props.posts.map( post => {
    return <li key={post.id}><Link to={`/posts/escaperooms/${post.id}`}>{post.title}</Link></li>

  })

  return (

     <div>{listposts}</div>

  )

}


export default ListLists
