import React from 'react';
import { Link } from 'react-router-dom';

const ResultsList = props  => {

//list the creators that meet searh criteria
  const listResults = props.posts.map( post => {
    return(

      <li className="search-list" key={post.id}>
      <Link to={`posts/${post.id}`}>{post.title}</Link>
      </li>)
    })
  return(
    <div>
       <ul >
         { listResults }
       </ul>
    </div>
  )
}

ResultsList.defaultProps = {
  posts: []
}


export default ResultsList
