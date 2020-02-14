import React from 'react';
import { Link } from 'react-router-dom';

const ResultsList = props  => {
  console.log(props)
//list the creators that meet searh criteria
  const listResults = props.posts.map( post => {
    return(

      <li className="review-item" key={post.id}>
      <div class="row">
        <div class="col-lg-4">
          <div class="review-pic">
            <img src="img/review/1.jpg" alt=""/>
          </div>
        </div>
        <div class="col-lg-8">
        <div class="review-content text-box text-white">
          <div class="rating">
        </div>
          <h3><Link to={`posts/${post.id}`}>{post.title}</Link></h3>
        <div class="review-content text-box text-white"></div>
      </div>
    </div>
  </div>

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
