import React from 'react';
import {Link} from 'react-router-dom'

const Reviews = (props) =>{

  const reviewList = this.props.posts.map(post => {
    return(
      <div key={post.id}>
        <Link to={`/admin/posts/${post.id}/edit`}>{post.name}</Link>
      </div>
    )

  });

  return(
    <div>
      {reviewList}
    </div>
  )
}

export default Reviews
