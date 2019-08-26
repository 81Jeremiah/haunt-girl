import React from 'react';

const PostsList = (props) =>{
  console.log(props)
  const listPosts = props.posts.map( post => {

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
								<h5><i>Rating</i><span>4.5</span> / 5</h5>
							</div>
							<div class="top-meta">11.11.18  /  in <a href="">Haunts</a></div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <a href="#" class="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
          </div>
        </div>
      </div>
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
