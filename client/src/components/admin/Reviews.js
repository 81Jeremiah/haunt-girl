import React from 'react';
import {Link} from 'react-router-dom'

const Reviews = (props) =>{
console.log(props)
  const reviewList = props.posts.map(post => {
    return(
      <li key={post.id}>
        <Link to={`/admin/posts/${post.id}/edit`}>{post.title}</Link>
      </li>
    )

  });

  return(
    <div>
      <ul>
        {reviewList}
      </ul>
    </div>
  )
}

export default Reviews
