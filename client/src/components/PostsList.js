import React from 'react';

const PostsList = (props) =>{
  console.log(props)
  const listPosts = props.posts.map( post => {

    return(
      <li className='' key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
      </li>
    );
  });

  return(
    <div>
      <ul>
        { listPosts }
      </ul>
    </div>
  );
}

export default PostsList
