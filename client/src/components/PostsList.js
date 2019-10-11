import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



const PostsList = (props) =>{

  const listPosts = props.posts.map( post => {
    // const category = post.category.name
    // debugger
    // const categoryRoute = category.trim()

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
							<div class="top-meta">{post.published_at}  /  in <Link to={props.categoryRoute}>{post.category.name}</Link></div>
              <h3>{post.title}</h3>
                  <div class="review-content text-box text-white">
                    {ReactHtmlParser(post.content.substring(0,250))}
                  </div>
                   <br/>
              <Link to={`${props.categoryRoute}/${post.id}`} class="read-more">Read More  <img src={doubleArrow} alt=""/></Link>
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
