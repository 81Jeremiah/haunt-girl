import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getPost } from '../actions/postActions';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';
import ReactPlayer from 'react-player'
import ReactHtmlParser from 'react-html-parser';

class Post extends Component {

  componentDidMount(){
    const postId = this.props.match.params.id
    this.props.getPost(postId)

  }




  render(){
    const post = this.props.post
    const category = this.props.post.category || " "

    return(
      <>

      <Navbar />
      <section className="games-single-page">
        <div className="container">
          <div className="game-single-preview">
            <ReactPlayer url={post.video}  />
            {/*// <img src="img/games/big.jpg" alt=""/>*/}
          </div>
          <div class="row">
            <div class="col-xl-9 col-lg-8 col-md-7 game-single-content">


              <div class="gs-meta">{post.published_at} /  in <Link to="/escaperooms"> {category.name}</Link></div>
              <h2 class="gs-title">{post.title}</h2>
            <p>{ReactHtmlParser(post.content)}</p>
              <div class="geme-social-share pt-5 d-flex">
                <p>Share:</p>

              <a href="https://www.facebook.com/sharer/sharer.php?u=thehauntgirl.com/posts/${post.id}"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/home?status=thehauntgirl.com/posts/${post.id} "><i class="fa fa-twitter"></i></a>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
              <div id="stickySidebar">
                <div class="widget-item">
                  <div class="rating-widget">
                    <h4 class="widget-title">Ratings</h4>
                    <ul>
                      <li>Cost<span>3.5/5</span></li>
                      <li>Set Design<span>4.5/5</span></li>
                      <li>Jump Scares<span>3.5/5</span></li>
                      <li>Intensity<span>4.5/5</span></li>

                    </ul>
                    <div class="rating">
                      <h5><i>Overall Rating</i><span>4.5</span> / 5</h5>
                    </div>
                  </div>
                </div>
                <div class="widget-item">
                  <div class="testimonials-widget">
                    <h4 class="widget-title">What Other Enthusiasts Say</h4>
                    <div class="testim-text">
                      <p>Worst.Haunt.Ever</p>
                      <h6><span>Potato Salad Jeff</span></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="game-author-section">
        <div class="container">
          <div class="game-author-pic set-bg" data-setbg="img/author.jpg"></div>
          <div class="game-author-info">
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
