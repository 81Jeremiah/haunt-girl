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
        <div className="row">
					<div className="col-lg-4">
						<div className="review-pic">
							<img src="img/review/1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="review-content text-box text-white">
							<div className="rating">
								<h5><i>Rating</i><span>4.5</span> / 5</h5>
							</div>
							<div className="top-meta">{post.published_at}  /  in <Link to={props.categoryRoute}>{post.category.name}</Link></div>
              <h3>{post.title}</h3>
            <div className="review-content text-box text-white">
                    {ReactHtmlParser(post.content.substring(0,250))}
                  </div>
                   <br/>
                 <Link to={`${props.categoryRoute}/${post.id}`} className="read-more">Read More  <img src={doubleArrow} alt=""/></Link>
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
