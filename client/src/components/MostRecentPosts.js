import React from 'react';
import {Link} from 'react-router-dom';
import doubleArrow from '../img/icons/double-arrow.png';
import ReactHtmlParser from 'react-html-parser';


const MostRecentPosts = props =>{
  const recentPostsList = props.recentPosts.map( post => {
   const category = props.recentPost.category
    return(
      <div class="col-md-4">
        <div class="intro-text-box text-box text-white">
          <div class="top-meta"> <Link to="/haunts">{category.name}</Link></div>
          <h3>Reviews</h3>
          <p>{ReactHtmlParser(post.content.substring(0,250))}</p>
        <Link to="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
        </div>
      </div>
  )}
)
  return(
    {recentPostsList}
  )
}


export default MostRecentPosts
