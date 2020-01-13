import React from 'react';
import {Link} from 'react-router-dom';
import doubleArrow from '../img/icons/double-arrow.png';
import ReactHtmlParser from 'react-html-parser';


const MostRecentPosts = props =>{
  console.log(props)
  const recentPostsList = props.recentPosts.map( post => {
   const category = post.category
   const category_url = category.name.replace(' ','')
   console.log(category_url)
    return(
      <div key={post.id} className="col-md-4">
        <div className="intro-text-box text-box text-white">
          <div  className="top-meta"> <Link to={`/${category_url}`}>{category.name}</Link></div>
        <h3>{post.title}</h3>
          {ReactHtmlParser(post.content.substring(0,250))}
        <Link to={`posts/${post.id}`} className="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
        </div>
      </div>
  )}
)
  return(
    <div className="row">
    {recentPostsList}
    </div>
  )
}


export default MostRecentPosts
