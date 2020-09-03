import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {deletePost} from '../../actions/postActions';

const Reviews = (props) =>{


  const handleClick = (escaperoom) => {
    props.deleteEscapeRoom(escaperoom)
  }


  const reviewList = props.posts.map(post => {
    return(
      <li key={post.id}>
        <Link to={`/admin/posts/${post.id}/edit`}>{post.title}</Link>
        <span onClick={() => handleClick(post.id)}>(x)</span>
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

export default connect(null,{deletePost})(Reviews)
