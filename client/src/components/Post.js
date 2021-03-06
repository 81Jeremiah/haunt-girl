import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getPost } from '../actions/postActions';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';
import ReactPlayer from 'react-player'
import ReactHtmlParser from 'react-html-parser';
import GhostRating from './GhostRating';
import KeyRating from './KeyRating';

class Post extends Component {

  state = {
    has_video: false
  }

  componentDidMount(){
    const postId = this.props.match.params.id
    this.props.getPost(postId)

  }




  render(){
    const post = this.props.post
    console.log(post)
    const category = this.props.post.category || " "
    const state = this.props.post.state || " "
    const city = this.props.post.city || " "
    console.log(state)
    const date = new Date(post.published_at)
    return(
      <>

      <Navbar />
      <section className="games-single-page">
        <div className="container">
          <div className="game-single-preview">

            {/*// <img src="img/games/big.jpg" alt=""/>*/}
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 game-single-content">


              <div className="gs-meta">{date.toDateString()} /  in <Link to="/escaperooms"> {category.name}</Link></div>
              <p>{city.name}, {state.abbreviation} </p>

              <h2 className="gs-title">{post.title}</h2>
                {this.state.has_video ? <ReactPlayer url={post.video}  />: null}

                <p>{ReactHtmlParser(post.content)}</p>
                <div className="geme-social-share pt-5 d-flex">
                <p>Share:</p>
              <Link to={`https://www.facebook.com/sharer/sharer.php?u=thehauntgirl.com/posts/${post.id}`}><i className="fa fa-facebook"></i></Link>
            <Link to={`https://twitter.com/home?status=thehauntgirl.com/posts/${post.id} `}><i className="fa fa-twitter"></i></Link>

              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
              <div id="stickySidebar">
                <div className="widget-item">
                  <div className="rating-widget">
                    <h4 className="widget-title">Ratings</h4>
                    <ul>
                      <li>Price<span>{post.price}</span></li>
                      <li>Recomended Players: <span>{post.recommended_players}</span></li>
                      <li>Reccomended Age<span>{post.recommended_age}</span></li>
                      <li><span>{post.public_or_private} game</span></li>
                      {/*//
                      // <li>Set Design<span>4.5/5</span></li>
                      // <li>Jump Scares<span>3.5/5</span></li>*/}
                      <li>Scare Rating:  <span><GhostRating scarefactor={post.scarefactor}/></span></li>

                    </ul>
                    <div className="rating">
                      <h5><i>Overall Rating</i></h5><span><KeyRating score={5} /></span>
                    </div>
                  </div>
                </div>
              {/*  <div className="widget-item">
                  <div className="testimonials-widget">
                    <h4 className="widget-title">What Other Enthusiasts Say</h4>
                      <div className="testim-text">
                         <p></p>
                      <h6><span></span></h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="game-author-section">
        <div className="container">
          {/*<div className="game-author-pic set-bg" data-setbg="img/author.jpg"></div> */}
        <div className="game-author-info">
            <h4>Written by:The Haunt Girl</h4>
            <p></p>
          </div>
        </div>
      </section>
    <NewsletterSection />
    <Footer />
  </>

    );
  }
}

const mapStateToProps = state => {
  console.log(state.posts.post)

  return { post: state.posts.post}


}

export default connect(mapStateToProps, {getPost})(Post)
