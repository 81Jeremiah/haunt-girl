import React from 'react';
import { Link } from 'react-router-dom';

const ResultsList = props  => {
  console.log(props)
//list the creators that meet searh criteria
  const listResults = props.posts.map( post => {
    return(

      <li className="review-item" key={post.id}>




        <Link to={`reviews/posts/${post.id}`}>{post.title}</Link>




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
